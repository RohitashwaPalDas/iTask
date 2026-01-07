import pool from "../config/db.js";

export const getTasks = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM tasks ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTask = async (req, res) => {
  const { title, description, status = "pending" } = req.body;
  const io = req.app.get("io"); // Socket.IO instance

  try {
    const result = await pool.query(
      `INSERT INTO tasks (title, description, status)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [title, description, status]
    );

    // Emit event to all connected clients
    io.emit("taskAdded", result.rows[0]); // ✅ Match client event

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  const io = req.app.get("io");

  try {
    const result = await pool.query(
      `
      UPDATE tasks
      SET
        title = COALESCE($1, title),
        description = COALESCE($2, description),
        status = COALESCE($3, status)
      WHERE id = $4
      RETURNING *
      `,
      [title, description, status, id]
    );

    io.emit("taskUpdated", result.rows[0]); // 🔥
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const io = req.app.get("io");

  try {
    await pool.query("DELETE FROM tasks WHERE id=$1", [id]);
    io.emit("taskDeleted", Number(id)); // 🔥
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

