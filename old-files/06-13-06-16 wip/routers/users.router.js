const express = require("express");
const router = express.Router();
const prisma = require("../utis/prisma/index.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const {
  signUpValidator,
  loginValidator,
  handleValidationResult,
} = require('../middleware/validation-result-handler');

const authController = require("../controllers/auth.controller");
const loginController = require('../controllers/login.controller.js');
const cookieController = require('../controllers/cookie.controller.js');
const sessionRouter = require("../routers/session.router.js");
const { authenticateToken } = require("../middleware/authenticate-middleware");

// 📌 회원가입 API
router.post('/sign-up', signUpValidator, handleValidationResult, authController.signUp);

// 🔐 로그인 API
router.post('/login', loginValidator, handleValidationResult, loginController.login);

// 👤 인증된 사용자 정보 조회
router.get("/user", authenticateToken, authController.getUserInfo);


// 🍪 쿠키 관련 API
router.get('/cookie', cookieController.setCookie);
router.get('/cookie/all', cookieController.getCookie);

// 🗂️ 세션 관련 라우터
router.use("/session", sessionRouter);


module.exports = router;
