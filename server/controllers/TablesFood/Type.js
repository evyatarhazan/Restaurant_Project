
import { INTEGER, DATE } from 'sequelize';
import { db } from '../../dbConnect.js';

const TypeTablesFood = db.define('TablesFood', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lastUpdated: {
        type: DATE,
        allowNull: false
    },
    capacity: {
        type: INTEGER,
        allowNull: false
    },
    status: {
        type: INTEGER,
        allowNull: true
    }
});

export default TypeTablesFood;