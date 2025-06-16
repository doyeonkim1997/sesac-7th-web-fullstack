const prisma = require('../utis/prisma/index');
const AuthRepository = require('../repositories/auth.respository'); // AuthRepository를 가져옵니다.
const bcrypt = require('bcrypt'); // 

class AuthService {
  async signUp(email, password, nickname) {
    const result = await AuthRepository.findByEmail(email);
    if (extingUser) {
      return { error: '이미 사용 중인 이메일입니다.' };
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const bcryptedPassword = await bcrypt.hash(
      password,
      salt);

    const newUser = await AuthRepository.createUser(email, bcryptedPassword, nickname);
    return { userId: newUser.userId };
  }
}


module.exports = new AuthService();
