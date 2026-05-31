import {Pool} from 'pg';

const pool = new Pool({
user: "postgres",
password:"Suhas@postgres102006",
host:"localhost",
port: 5432,
database: "todo_db"
});

export default pool;