mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node.js',
});

function getMembers() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT `members`.* FROM `members`', (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

function getStatus() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT `status`.* FROM `status`', (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

function getArticles() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT `articles`.* FROM `articles`', (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

function getArticleById(id) {
    return new Promise((resolve, reject) => {
        connection.query(
            {
                sql: 'SELECT `articles`.* FROM `articles` WHERE id = ?',
                values: [id],
            },
            (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            }
        );
    });
}

module.exports = {
    getMembers,
    getArticles,
    getStatus,
    getArticleById,
};
