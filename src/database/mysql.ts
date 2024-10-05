import mysql2 from 'mysql2';
import mysql from "mysql2/promise";


export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_database',
});