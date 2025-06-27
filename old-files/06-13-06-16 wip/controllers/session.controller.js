class SessionController {
  setSession(req, res) {
    if (!req.session.users) {
      req.session.users = 1;
    } else {
      req.session.users += 1;
    }
    res.send(`들어온 수: ${req.session.users}`);
  }

  getUserInfo(req, res) {
    console.log("인증된 사용자:", req.user);
    res.status(200).json({
      message: "인증 성공",
      user: req.user,
    });
  }
}
module.exports = new SessionController();