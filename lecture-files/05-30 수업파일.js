const express = require("express");
const app = express();
const PORT = 3001; // 또는 원하는 포트 번호
const path = require("path"); // 
// 상단에 추가
const users = [1, 2, 3, 4, 5];
const posts = [
  {
    "id": 1,
    "userId": 2,
    "title": "첫 번째 글",
    "content": "안녕하세요 게시판입니다.",
    "createdAt": "2025-05-29T10:00:00Z"
  },
  {
    "id": 2,
    "userId": 2,
    "title": "두 번째 글",
    "content": "안녕하세요 게시판2입니다.",
    "createdAt": "2025-05-29T10:00:00Z"
  }
];


// 정적 파일 서빙
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get("/users", (req, res) => {
  const userList = users.map((id) => ({ id }));
  res.send(userList);
});

app.post("/users", (req, res) => {
  const { id } = req.body;
  if (users.includes(id)) {
    return res.status(400).send({ error: "이미 존재하는 사용자입니다." });
  }

  users.push(id);
  res.send({ id });
});

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  if (!users.includes(userId)) {
    return res.status(404).send({ error: "존재 하지 않는 사용자입니다." });
  }
  res.send({ id: userId });
});

app.delete("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const index = users.indexOf(userId);

  if (index === -1) {
    return res.status(404).send({ error: "해당 사용자를 찾을 수 없습니다." });
  }

  users.splice(index, 1);
  res.send({ message: "사용자가 삭제되었습니다." });
});

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.get("/posts/:id", (req, res) => {
  const postId = Number(req.params.id);
  const targetPost = posts.find((p) => p.id === postId);

  if (!targetPost) {
    return res.status(404).send({ error: "게시글을 찾을 수 없습니다." });
  }

  res.send(targetPost);
});


app.get("/users/:id/posts", (req, res) => {
  const userId = Number(req.params.id);

  // 사용자 존재 확인
  const userExists = users.includes(userId);
  if (!userExists) {
    return res.status(404).send({ error: "해당 사용자를 찾을 수 없음" });
  }

  // 게시글 필터링
  const userPosts = posts.filter((post) => post.userId === userId);
  res.send(userPosts);
});

app.post("/posts", (req, res) => {
  const { userId, title, content } = req.body;

  // 사용자 존재 여부 확인
  if (!users.includes(userId)) {
    return res.status(404).send({ error: "존재하지 않는 사용자입니다." });
  }

  const newPost = {
    id: posts.length + 1,
    userId,
    title,
    content,
    createdAt: new Date().toISOString()
  };

  posts.push(newPost);

  res.send(newPost);
});

app.put("/posts/:id", (req, res) => {
  const postId = Number(req.params.id);
  const { title, content } = req.body;

  // 게시글 존재 여부 확인
  const postIndex = posts.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).send({ error: "게시물을 찾을 수 없습니다." });
  }

  // 기존 post 정보 보존 + 수정
  posts[postIndex] = {
    ...posts[postIndex],
    title,
    content,
    updatedAt: new Date().toISOString(),

  };

  res.send(posts[postIndex]);
});


app.delete("/posts/:id", (req, res) => {
  const postId = Number(req.params.id);

  const index = posts.findIndex((p) => p.id === postId);

  if (index === -1) {
    return res.status(404).send({ error: "게시물을 찾을 수 없습니다." });
  }

  posts.splice(index, 1);
  res.send({ message: "게시물이 삭제되었습니다." });
});


app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중! http://localhost:${PORT}`);
});