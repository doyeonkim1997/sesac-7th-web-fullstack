const jwt = require("jsonwebtoken");
const SECRET_KEY = "sessac"; // 나중에 .env로 옮기기

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "토큰 없음" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // 이후 라우터에서 `req.user.userId` 등 접근 가능
    console.log("인증된 사용자:", decoded);
    next();
  } catch (error) {
    return res.status(403).json({ error: "토큰 검증 실패" });
  }
}

module.exports = { authenticateToken };
