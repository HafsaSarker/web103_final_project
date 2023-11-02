import { pool } from "../config/database.js";

const createEvent = async (req, res) => {
  try {
    const user_id = parseInt(req.params.user_id);
    const { title, start_date, end_date, start_time, end_time, category } =
      req.body;

    const results = await pool.query(
      `INSERT INTO events (user_id, title, start_date, end_date, start_time, end_time, category)
      VALUES($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`,
      [user_id, title, start_date, end_date, start_time, end_time, category]
    );
    res.status(201).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getEvents = async (req, res) => {
  try {
    const user_id = parseInt(req.params.user_id);

    const results = await pool.query(
      "SELECT * FROM events WHERE user_id = $1 ORDER BY id ASC",
      [user_id]
    );
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getEvent = async (req, res) => {
  try {
    const user_id = parseInt(req.params.user_id);
    const id = parseInt(req.params.id);

    const results = await pool.query(
      "SELECT * FROM events WHERE user_id = $1 AND id = $2",
      [user_id, id]
    );
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user_id = parseInt(req.params.user_id);

    const { title, start_date, end_date, start_time, end_time, category } =
      req.body;

    const results = await pool.query(
      `UPDATE events
      SET title = $1, start_date = $2, end_date = $3, start_time = $4, end_time = $5, category = $6, updated_at = $7
      WHERE user_id = $8 AND id = $9`,
      [
        title,
        start_date,
        end_date,
        start_time,
        end_time,
        category,
        new Date().toISOString(),
        user_id,
        id,
      ]
    );

    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const user_id = parseInt(req.params.user_id);
    const id = parseInt(req.params.id);

    const results = await pool.query(
      "DELETE FROM events WHERE user_id = $1 AND id = $2",
      [user_id, id]
    );
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  createEvent,
  getEvents,
  getEvent,
  updateEvent,
  deleteEvent,
};
