const express = require("express");
const userRouter = require("./routers/users.router");
const cookieParser = require("cookie-parser");
const errorHandlingMiddleware = require("./middleware/error-handling-middleware");
const postsRouter = require("./routers/posts.router.js");

/*
var session = require('express-session');
var FileStore = require('session-file-store')(session);
*/

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/", userRouter);
app.use("/posts", postsRouter); // posts 라우터 등록
// posts 라우터도 있다면 추가

// 오류 처리 미들웨어
app.use(errorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(PORT, `포트로 서버가 열림`);
});