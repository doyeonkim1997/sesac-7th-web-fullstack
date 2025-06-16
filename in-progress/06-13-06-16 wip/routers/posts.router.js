const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = require('../utis/prisma/index.js');
const {
  postsValidator,
  handleValidationResult,
  getPostsValidator,
  deletePostValidator
} = require('../middleware/validation-result-handler');


/**
 * 게시물 관련 기능을 처리하는 컨트롤러 클래스
 */
class PostsController {
  /**
   * 모든 게시물을 조회합니다.
   * @param {express.Request} req - Express 요청 객체
   * @param {express.Response} res - Express 응답 객체
   * @returns {Promise<void>} 게시물 목록을 JSON 형태로 반환
   */
  async getAllPosts(req, res) {
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
    });
    res.json(posts);
  }

  /**
   * 특정 ID의 게시물을 조회합니다.
   * @param {express.Request} req - Express 요청 객체
   * @param {express.Response} res - Express 응답 객체
   * @returns {Promise<void>} 특정 게시물을 JSON 형태로 반환
   */
  async getPostById(req, res) {
    const postId = Number(req.params.postId);
    if (isNaN(postId)) {
      return res.status(400).json({ error: 'Invalid post ID' });
    }
    const post = await prisma.post.findUnique({
      where: { postId: postId },
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
    }
    res.json(post);
  }

  /**
   * 새로운 게시물을 생성합니다.
   * @param {express.Request} req - Express 요청 객체
   * @param {express.Response} res - Express 응답 객체
   * @returns {Promise<void>} 생성된 게시물을 JSON 형태로 반환
   */
  async createPost(req, res) {
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
  }

  /**
   * 기존 게시물을 수정합니다.
   * @param {express.Request} req - Express 요청 객체
   * @param {express.Response} res - Express 응답 객체
   * @returns {Promise<void>} 수정된 게시물을 JSON 형태로 반환
   */
  async updatePost(req, res) {
    try {
      const { id } = req.params;
      const { title, content } = req.body;
      const updatedPost = await prisma.post.update({
        where: { postId: Number(id) },
        data: { title, content }
      });
      res.json(updatedPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


  /**
   * 게시물을 삭제합니다.
   * @param {express.Request} req - Express 요청 객체
   * @param {express.Response} res - Express 응답 객체
   * @returns {Promise<void>} 삭제 결과 메시지를 JSON 형태로 반환
   */
  async deletePost(req, res) {
    try {
      const { id } = req.params;

      // 삭제할 게시글이 실제로 존재하는지 확인
      const post = await prisma.post.findUnique({
        where: { postId: Number(id) }
      });

      if (!post) {
        return res.status(404).json({ error: '삭제할 게시글이 없습니다.' });
      }

      // 존재하면 삭제 실행
      await prisma.post.delete({
        where: { postId: Number(id) }
      });

      res.json({ message: '게시글이 삭제되었습니다.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

/**
 * PostsController 클래스의 인스턴스를 생성합니다.
 */
const postsController = new PostsController();

/**
 * 게시물 관련 라우터 설정
 * GET /posts - 모든 게시물 조회
 * GET /posts/:postId - 특정 게시물 조회
 * POST / - 새 게시물 생성
 * PUT /:id - 게시물 수정
 * DELETE /:id - 게시물 삭제
 */
router.get('/posts', postsController.getAllPosts);
router.get('/posts/:postId', getPostsValidator, handleValidationResult, postsController.getPostById);
router.post('/', postsValidator, handleValidationResult, postsController.createPost);
router.put('/:id', postsController.updatePost);
router.delete('/:id', deletePostValidator, handleValidationResult, postsController.deletePost);

module.exports = router;
