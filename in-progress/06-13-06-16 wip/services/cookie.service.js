// services/cookie.service.js
class CookieService {
  setLoginCookie(res) {
    res.cookie('login', 'true', { httpOnly: true, maxAge: 3600000 });
  }

  getCookies(req) {
    return req.cookies;
  }
}
module.exports = new CookieService();
