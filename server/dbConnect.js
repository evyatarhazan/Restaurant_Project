import mysql from 'mysql';
import * as dotenv from "dotenv";

dotenv.config()


export const db = mysql.createConnection({
    host: process.env.HOST,
    user: 'root',
    password: '',
    database: process.env.DB

})

db.connect((error) => {

    if (error) {
        console.log(error, ">>>>>run=>    sudo /opt/lampp/lampp start ** if start this project first time or restart copmuter<<<<") 

        throw error ;
        
    }
    console.log("MySql Connected");

});