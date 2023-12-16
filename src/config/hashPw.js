const bcrypt = require('bcryptjs')

const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

const comparePasswords = async (inputPassword, hashedPassword) => {
  return await bcrypt.compare(inputPassword, hashedPassword);
}

module.exports = {
  hashPassword,
  comparePasswords,
}
