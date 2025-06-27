

const AuthService = require('../services/auth.service');


class AuthController {
  async signUp(req, res, next) {
    const { email, password, nickname } = req.body;
    const newUser = await AuthService.signUp(email, password, nickname);
    return res.status(201).json({
      message: '회원가입이 성공적으로 완료되었습니다.',
      user: newUser,
    });
  }

  getUserInfo(req, res) {
    console.log("인증된 사용자:", req.user);
    res.json({ message: "인증 성공", user: req.user });
  }
}
module.exports = new AuthController();
