const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

const SECRET_KEY = "sessac";

// JWT 로그인
router.get('/login', (req, res) => {
  const user = {
    id: 1,
    username: "김도연",
    role: "user"
  }
  next();

  const token = jwt.sign(user, SECRET_KEY, {
    expiresIn: "60s"
  });

  console.log(token);

  return res.json({
    message: "로그인 성공",
    token: token
  });
});

// JWT 인증 미들웨어
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.user = user;
    next();
  });
}

// JWT 보호 라우트
router.get("/user", authenticateToken, (req, res) => {
  console.log("인증된 사용자:", req.user);
  // next(new Error("password!!!!!!!!"));
});

// 쿠키
router.get("/set-cookie", (req, res) => {
  res.cookie("login", "true");
  return res.send("Cookie set successfully!");
});

router.get("/get-cookie", (req, res) => {
  const cookies = req.cookies;
  console.log(cookies);
  res.json({
    message: "Cookies retrieved successfully!",
    cookies: cookies
  });
});

// 세션
router.get("/set-session", (req, res) => {
  if (!req.session.users) {
    req.session.users = 1;
  } else {
    req.session.users += 1;
  }
  res.send(`들어온 수: ${req.session.users}`);
});

module.exports = router;
