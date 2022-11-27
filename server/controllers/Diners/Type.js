
import { INTEGER, STRING, DATE } from 'sequelize';
import { db } from '../../dbConnect.js';

const TypeDiners = db.define('Diners', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lastUpdated: {
        type: DATE,
        allowNull: false
    },
    name: {
        type: STRING,
        allowNull: false
    },
    size: {
        type: INTEGER,
        allowNull: false
    },
    queue: {
        type: STRING,
        allowNull: false
    },
    reservations: {
        type: STRING,
        allowNull: false
    },
    nameTable: {
        type: INTEGER,
        allowNull: true
    },
    sum: {
        type: INTEGER,
        allowNull: false
    }
});

export default TypeDiners;