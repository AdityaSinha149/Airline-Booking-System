import mysql from "mysql2/promise";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  const connection = await mysql.createConnection({
    host: "your_host",
    user: "your_username",
    password: "your_password",
    database: "your_database",
  });

  try {
    const [rows] = await connection.execute("SELECT DISTINCT city FROM locations");
    res.status(200).json(rows.map((row) => row.city));
  } catch (error) {
    console.error("MySQL Error:", error);
    res.status(500).json({ error: "Database connection failed" });
  } finally {
    connection.end();
  }
}
