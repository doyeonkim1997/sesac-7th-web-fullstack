// services/post.service.js
const prisma = require('../utis/prisma/index.js');

class PostService {
  // 전체 게시글 조회
  async getAllPosts() {
    return await prisma.post.findMany({
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
  }

  // 단일 게시글 조회
  async getPostById(postId) {
    return await prisma.post.findUnique({
      where: { postId },
      include: {
        user: {
          select: {
            userId: true,
            nickname: true
          }
        }
      }
    });
  }

  // 게시글 생성
  async createPost(title, content, userId) {
    return await prisma.post.create({
      data: { title, content, userId }
    });
  }

  // 게시글 수정
  async updatePost(postId, title, content) {
    return await prisma.post.update({
      where: { postId },
      data: { title, content }
    });
  }

  // 게시글 삭제
  async deletePost(postId) {
    return await prisma.post.delete({
      where: { postId }
    });
  }
}

module.exports = new PostService();
