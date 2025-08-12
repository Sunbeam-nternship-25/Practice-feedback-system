const { pool } = require("./database");

pool.getConnection((err, conn) => {
  if (err) {
    console.error("❌ Connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL!");
    conn.release();
  }
  pool.end();
});
