'use strict';

import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

let hashpassword = (pw) => {
  return new Promise(async (resolve, reject) => {
    try {
      var hash = await bcrypt.hashSync(pw, salt);
      resolve(hash);
    } catch (error) {
      reject(error);
      console.log('error hash pw', error);
    }
  });
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashpw = await hashpassword('12345');
    return queryInterface.bulkInsert('Users', [{
      email: 'chien@gmail.com',
      password: hashpw,
      firstName: 'chien',
      lastName: 'van',
      address: 'bthanh',
      gender: 1,
      roleid: 'ROLE',
      phonenumber: '033434',
      positionid: 'trphong',
      image: 'noche',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    // Your down function code...
  }
};
