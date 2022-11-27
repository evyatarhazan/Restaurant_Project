import * as dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config()

export const db = new Sequelize(
    process.env.DB,
    'root',
    '',
    {
        host: process.env.HOST,
        dialect: 'mysql',
        define: {
            freezeTableName: true,
            timestamps: false
        }
    }
  );

db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.log(error, ">>>>>run=>    sudo /opt/lampp/lampp start ** if start this project first time or restart copmuter<<<<")
    console.error('Unable to connect to the database: ', error);
});