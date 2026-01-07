import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function testConnection() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("PostgreSQL connected:", res.rows[0]);
  } catch (err) {
    console.error("DB connection error:", err);
    process.exit(1); 
  }
}

testConnection();

export default pool;
