const prisma = require('../utis/prisma/index');


class AuthRepository {
  async findByEmail(email) {
    return await prisma.users.findFirst({
      where: { email }
    })
  }

  async createUser(email, password, nickname) {
    return await prisma.users.create({
      data: {
        email,
        password,
        nickname
      }
    })
  }

}
module.exports = new AuthRepository();
