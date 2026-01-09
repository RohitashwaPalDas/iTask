import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
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
