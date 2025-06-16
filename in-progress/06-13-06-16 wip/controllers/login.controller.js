

const AuthService = require('../services/login.service');


class loginController {
  async login(req, res, next) {
    const { email, password } = req.body;

    const user = await AuthService.login(email, password);

    if (user.error) {
      return res.status(400).json({ message: user.error });
    }

    return res.status(200).json({
      message: '로그인에 성공했습니다.',
      user: user,
    });
  }
}
module.exports = new loginController();