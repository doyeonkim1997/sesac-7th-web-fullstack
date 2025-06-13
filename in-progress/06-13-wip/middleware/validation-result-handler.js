const { body, validationResult } = require('express-validator')
exports.signUpValidator = [
  body('email')
    .isEmail().withMessage('이메일형식이 아닙니다')
    .notEmpty().withMessage('이메일이 없습니다.'),
  body('password')
    .isLength({ min: 6 }).withMessage('비밀번호가 6자 이하')
    .notEmpty().withMessage('패스워드드이 없습니다.'),
  body('nickname')
    .notEmpty().withMessage('패스워드드이 없습니다.'),
];
// 로그인 입력 검사사
exports.loginValidator = []
exports.handleValidationResult = (req, res, next) => {
  const result = validationResult(req).errors;
  if (result.length !== 0) {
    // 입력 오류가 있는 경우
    const extracteError = result.map(err => err.msg)
    // console(extracteError)
    return next(new Error("InputValidation"));
  }
  next();
}