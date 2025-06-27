const express = require("express");
const cookieParser = require("cookie-parser");
const session = require('express-session'); // ✅ 세션 추가
const FileStore = require('session-file-store')(session); // ✅ 파일스토어 추가

const userRouter = require("./routers/users.router");
const postsRouter = require("./routers/posts.router.js");
const sessionRouter = require("./routers/session.router"); // ✅ 세션 라우터도 등록
const errorHandlingMiddleware = require("./middleware/error-handling-middleware");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ 세션 미들웨어 (라우터보다 먼저 등록)
app.use(session({
  secret: 'your-secret-key', // 원하는 키로 설정
  resave: false,
  saveUninitialized: true,
  store: new FileStore(), // 세션 저장소
  cookie: {
    secure: false, // HTTPS가 아닐 경우 false
    httpOnly: true,
    maxAge: 1000 * 60 * 60 // 1시간
  }
}));

app.use(express.json());
app.use(cookieParser());

// ✅ 라우터 등록 (세션 이후에)
app.use("/", userRouter);
app.use("/posts", postsRouter);
app.use("/session", sessionRouter); // 세션 라우터 추가

// ✅ 에러 핸들링 미들웨어 마지막에 등록
app.use(errorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(`${PORT} 포트로 서버가 열림`);
});
