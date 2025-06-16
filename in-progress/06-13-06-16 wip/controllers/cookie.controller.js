// controllers/cookie.controller.js
const CookieService = require('../services/cookie.service');
class CookieController {
  setCookie(req, res) {
    CookieService.setLoginCookie(res);
    res.send('쿠키 설정 완료!');
  }

  getCookie(req, res) {
    const cookies = CookieService.getCookies(req);
    res.json({ cookies });
  }
}
module.exports = new CookieController();
