const { body, param, validationResult } = require('express-validator');

// 회원가입
exports.signUpValidator = [
  body('email')
    .isEmail().withMessage('이메일형식이 아닙니다')
    .notEmpty().withMessage('이메일이 없습니다.'),
  body('password')
    .isLength({ min: 6 }).withMessage('비밀번호가 6자 이하')
    .notEmpty().withMessage('패스워드이 없습니다.'),
  body('nickname')
    .notEmpty().withMessage('닉네임이 없습니다.'),
];

// 🔥 [추가] 로그인
exports.loginValidator = [
  body('email')
    .isEmail().withMessage('이메일 형식이 아닙니다.')
    .notEmpty().withMessage('이메일은 필수입니다.'),
  body('password')
    .notEmpty().withMessage('비밀번호는 필수입니다.')
];

// 게시글 작성
exports.postsValidator = [
  body('title')
    .notEmpty().withMessage('제목이 없습니다.'),
  body('content')
    .notEmpty().withMessage('콘텐츠가 없습니다.')
];

// 특정 게시글 조회
exports.getPostsValidator = [
  param('postId')
    .isInt().withMessage('게시글 ID는 정수여야 합니다.')
    .notEmpty().withMessage('게시글 ID가 없습니다.'),
];

// 게시글 수정
exports.putPostsValidator = [
  param('postId')
    .isInt().withMessage('게시글 ID는 정수여야 합니다.')
    .notEmpty().withMessage('게시글 ID가 없습니다.'),
  body('title')
    .notEmpty().withMessage('제목이 없습니다.'),
  body('content')
    .notEmpty().withMessage('콘텐츠가 없습니다.')
];

// 게시글 삭제
exports.deletePostValidator = [
  param('id')  // <-- 여기 중요!!
    .isInt().withMessage('게시글 ID는 숫자여야 합니다.')
    .notEmpty().withMessage('게시글 ID는 필수입니다.')
];
// 에러 핸들러
exports.handleValidationResult = (req, res, next) => {
  const result = validationResult(req).errors;
  if (result.length !== 0) {
    const extracteError = result.map(err => err.msg);
    return next(new Error("InputValidation"));
  }
  next();
};
