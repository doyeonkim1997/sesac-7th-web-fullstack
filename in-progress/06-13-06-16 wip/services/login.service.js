const prisma = require('../utis/prisma/index');
const AuthRepository = require('../repositories/auth.respository'); // AuthRepository를 가져옵니다.
const bcrypt = require('bcrypt'); // 

class loginService {
  async login(email, password) {
    const user = await AuthRepository.findByEmail(email);
    if (!user) {
      return { error: '존재하지 않는 사용자입니다.' };
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { error: '비밀번호가 일치하지 않습니다.' };
    }
    return { userId: user.userId };
  }
}


module.exports = new loginService();
