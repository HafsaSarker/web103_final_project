import { pool } from "../config/database.js";

const createEntry = async (req, res) => {
  try {
    const user_id = parseInt(req.params.user_id);
    const { title, inspiration, gratitude, goals, notes, created_at } =
      req.body;

    const results = await pool.query(
      `INSERT INTO journals (user_id, title, inspiration, gratitude, goals, notes, created_at)
      VALUES($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`,
      [user_id, title, inspiration, gratitude, goals, notes, created_at]
    );
    res.status(201).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getEntries = async (req, res) => {
  try {
    const user_id = parseInt(req.params.user_id);

    const results = await pool.query(
      "SELECT * FROM journals WHERE user_id = $1 ORDER BY id ASC",
      [user_id]
    );
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getEntry = async (req, res) => {
  try {
    const user_id = parseInt(req.params.user_id);
    const id = parseInt(req.params.id);

    const results = await pool.query(
      "SELECT * FROM journals WHERE user_id = $1 AND id = $2",
      [user_id, id]
    );
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const updateEntry = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user_id = parseInt(req.params.user_id);

    const { title, inspiration, gratitude, goals, notes, updated_at } =
      req.body;

    const results = await pool.query(
      `UPDATE journals
      SET title = $1, inspiration = $2, gratitude = $3, goals = $4, notes = $5, updated_at = $6
      WHERE user_id = $7 AND id = $8`,
      [title, inspiration, gratitude, goals, notes, updated_at, user_id, id]
    );
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const deleteEntry = async (req, res) => {
  try {
    const user_id = parseInt(req.params.user_id);
    const id = parseInt(req.params.id);

    const results = await pool.query(
      "DELETE FROM journals WHERE user_id = $1 AND id = $2",
      [user_id, id]
    );
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  createEntry,
  getEntries,
  getEntry,
  updateEntry,
  deleteEntry,
};
