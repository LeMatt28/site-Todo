// const mysql = require("mysql")
require("dotenv").config();
const mysql = require("mysql2/promise");

// DÉFINITION DE LA CONNEXION A LA BASE
const connexion = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
})

// CONNEXION A LA BASE DE DONNÉES
// connexion.connect((err) => {
//     if(err){
//         console.error("erreur de co :" + err.stack)
//         return;
//     } else {
//         console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
//     }
// }); 

(async () =>{
    try {
        const [rows] : await connexion.query("SELECT 1");
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    } catch(err) {
        console.error("erreur :", err.message);
    }
});

module.exports = connexion