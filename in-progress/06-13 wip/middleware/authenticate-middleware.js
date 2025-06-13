const jwt = require("jsonwebtoken");

const SECRET_KEY = "sessac";

module.exports = function (req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  req.password = "1111";

  console.log(req.password);

  if (req.password !== "1111") {
    return next(new Error("password"));
  }

  const verifiedToken = verifyToken(token);

  if (!verifiedToken) {
    return next(new Error("TokenNotMatch"));
  }
  console.log("인증된 사용자:", verifiedToken);
  req.user = verifiedToken;

  next();
};

function verifyToken(token) {
  try {
    const user = jwt.verify(token, SECRET_KEY);
    return user;
  } catch (e) {
    return false;
  }
}