const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const SECRET_KEY = "sessac";
const bcrypt = require("bcrypt");
const prisma = require("../utis/prisma/index.js"); // 오타 유의
const { body, validationResult } = require("express-validator");
const { signUpValidator, loginValidator, handleValidationResult } = require('../middleware/validation-result-handler.js');


// 🔹 회원가입 유효성 검사 미들웨어
function signUpValidation() {
  return [
    body("email")
      .isEmail().withMessage("유효한 이메일을 입력해주세요.")
      .notEmpty().withMessage("이메일을 입력해주세요."),
    body("password")
      .isLength({ min: 6 }).withMessage("비밀번호는 6글자 이상이어야 합니다.")
      .notEmpty().withMessage("비밀번호를 입력해주세요."),
    body("nickname")
      .notEmpty().withMessage("닉네임을 입력해주세요."),
  ];
}


router.post('/sign-up', signUpValidator, handleValidationResult, async (req, res, next) => {
  const { email, password, nickname } = req.body;
  try {
    const user = await prisma.users.findFirst({
      where: { email }
    })
    if (user) {
      return next(new Error("ExistEmail"));
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    console.log(salt);
    const bcryptPassword = await bcrypt.hash(
      password,
      salt
    )
    // 4. 데이터 베이스에 저장
    await prisma.users.create({
      data: {
        email,
        password: bcryptPassword,
        nickname
      }
    })
    return res.status(201).json({
      message: '회원가입이 성공적으로 완료'
    });
  } catch (e) {
    console.log(e)
    return next(new Error("DataBaseError"));
  }
})
/** 로그인 API
 * 1. 이메일, 비밀번호 입력 여부 확인
 * 2. 이메일에 해당하는 사용자 찾기
 * 3. 사용자 존재 여부
 * 4. 비밀번호 일치 여부 확인
 * 5. JWT 토큰 발급
 * 6. 생생된 데이터를 전달
 */
router.post('/login', loginValidator, handleValidationResult, async (req, res, next) => {
  const { email, password } = req.body;
  // 2 번까지 완료!
  const user = await prisma.users.findFirst({
    where: { email }
  })
  if (!user) {
    //유저가 없는 경우
    return next(new Error("UserNotFound"));
  }
  // 사용자 가 있음
  const verifyPassword = await bcrypt.compare(
    password,
    user.password
  )
  console.log(verifyPassword)
  if (password !== user.password) {
    return next(new Error("PasswordError"))
  }
  const token = jwt.sign({
    userId: user.userId
  }, SECRET_KEY, {
    expiresIn: "12h"
  })
  return res.status(200).send({
    token
  })
})
router.get("/user", authenticateToken, (req, res, next) => {
  console.log(req.user)
  //next(new Error("ExistEmail"));
  // 토큰 검증을 하면 되겠죠?
})



// 🔹 JWT 인증 미들웨어
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.user = user;
    next();
  });
}

// 🔹 인증된 사용자 정보 라우터
router.get("/user", authenticateToken, (req, res) => {
  console.log("인증된 사용자:", req.user);
  res.json({ message: "인증 성공", user: req.user });
});

// 🔹 쿠키 예시
router.get("/set-cookie", (req, res) => {
  res.cookie("login", "true");
  return res.send("Cookie set successfully!");
});

router.get("/get-cookie", (req, res) => {
  const cookies = req.cookies;
  res.json({
    message: "Cookies retrieved successfully!",
    cookies: cookies
  });
});

// 🔹 세션 예시
router.get("/set-session", (req, res) => {
  if (!req.session.users) {
    req.session.users = 1;
  } else {
    req.session.users += 1;
  }
  res.send(`들어온 수: ${req.session.users}`);
});

module.exports = router;
