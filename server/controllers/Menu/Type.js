
import { INTEGER, STRING, DATE } from 'sequelize';
import { db } from '../../dbConnect.js';

const TypeMenu = db.define('Menu', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lastUpdated: {
        type: DATE,
        allowNull: false
    },
    category: {
        type: STRING,
        allowNull: false
    },
    name: {
        type: STRING,
        allowNull: false
    },
    price: {
        type: INTEGER,
        allowNull: true
    }
});

export default TypeMenu;