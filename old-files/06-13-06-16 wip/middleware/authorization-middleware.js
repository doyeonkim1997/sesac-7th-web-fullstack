const prisma = require("../Prisma/index.js");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY || "default_secret";

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

exports.checkPostOwner = async (req, res, next) => {
  const { postId } = req.params;
  const userId = req.user.id; // id가 인증된 사용자 ID라고 가정

  // userId 랑 post의 UserId가 동일한지 확인

  try {
    // 데이터베이스 에서 게시글을 조회합니다
    const post = await prisma.post.findUnique({
      where: { postId: +postId }
    })

    if (!post) {
      return next(new Error("error: '게시글을 찾을 수 없습니다.'"))
    }

    // 체크 유저가 게시글의 소유자인지 확인
    if (post.userId === userId) {
      return next(new Error("error: '권한이 없습니다.'"));
    }

    next(); // 유저가 게시글의 소유자라면 다음 미들웨어로 진행
  } catch (error) {
    console.error(error);
    next(new Error("error: '서버 오류가 발생했습니다.'"));
  }
  res.locals.post = post; // 게시글 정보를 로컬 변수에 저장
  next();
}

module.exports = { authenticateToken };