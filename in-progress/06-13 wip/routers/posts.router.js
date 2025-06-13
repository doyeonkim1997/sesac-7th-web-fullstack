const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = require('../utis/prisma/index.js');




// 전체 게시글 조회
router.get('/posts', async (req, res) => {
  const posts = await prisma.post.findMany({
    include: {
      user: {
        select: {
          userId: true,
          nickname: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
  res.json(posts);
});

// 특정 게시글 조회
router.get('/posts/:id', async (req, res) => {
  const postId = Number(req.params.id);
  if (isNaN(postId)) {
    return res.status(400).json({ error: 'Invalid post ID' });
  }
  const post = await prisma.post.findUnique({
    where: { id: postId },
    include: {
      user: {
        select: {
          userId: true,
          nickname: true
        }
      }
    }
  });
  if (!post) {
    return res.status(404).json({ error: '게시글을 찾을 수 없습니다.' });
  } else {
    res.json(post);
  }
})
// 게시글 생성
router.post('/', async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const post = await prisma.post.create({
      data: {
        title,
        content,
        userId
      }
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 게시글 수정
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedPost = await prisma.post.update({
      where: { id: Number(id) },
      data: {
        title,
        content
      }
    });
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 게시글 삭제
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.post.delete({
      where: { id: Number(id) }
    });
    res.json({ message: '게시글이 삭제되었습니다.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
