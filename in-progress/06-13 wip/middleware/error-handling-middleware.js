const { body } = require("express-validator");

module.exports = function (err, req, res, next) {

  switch (err.message) {
    case "InputvalidationError":
    case "PasswordError":
      res.status(400).send({
        errorMessage: "입력값이 올바르지 않습니다.",
      });

    case "ExistEmail": return res.status(400).send({
      errorMessage: "이미 가입된 이메일입니다.",
    })
    case 'userNotFound': return res.status(404).send({
      errorMessage: "존재하지 않는 유저입니다.",
    });

    case "DataBaseError": return res.status(500).send({
      errorMessage: "데이터베이스 오류가 발생했습니다.",
    });


    case "password": return res.status(400).send({
      errorMessage: "비밀번호가 일치하지 않습니다.",
    });

    case "Forbidden":
      return res.status(403).send({
        errorMessage: "권한이 없습니다.",
      });

    default:
      console.error(err);
      return res.status(500).send({
        errorMessage: "서버 오류가 발생했습니다.",
      });
  }
};

exports.signUpValidator = [
  body("email")
    .isEmail().withMessage("유효한 이메일을 입력해주세요.")
    .notEmpty().withMessage("이메일을 입력해주세요."),
  body("password")
    .isLength({ min: 6 }).withMessage("비밀번호는 6글자 이상이어야 합니다.")
    .notEmpty().withMessage("비밀번호를 입력해주세요."),
  body("nickname")
    .notEmpty().withMessage("닉네임을 입력해주세요.")
];
