const mysql = require('../helpers/mysql');


async function getStudent(){
    let query = `SELECT * FROM student`;
    return mysql.select(query);
}

module.exports = {
    getStudent: getStudent
}