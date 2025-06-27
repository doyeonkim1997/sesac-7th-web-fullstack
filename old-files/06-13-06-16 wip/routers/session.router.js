const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/session.controller");

// 세션 수 증가 예시
router.get('/set', sessionController.setSession);

// 사용자 정보 가져오기
router.get('/user', sessionController.getUserInfo);

module.exports = router;
