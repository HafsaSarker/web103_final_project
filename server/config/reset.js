import { pool } from "./database.js";
import "./dotenv.js";

const createUsersTable = async () => {
  const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id serial PRIMARY KEY,
      username varchar(50) UNIQUE NOT NULL,
      email varchar(255) UNIQUE NOT NULL,
      password varchar(60) NOT NULL,
      icon_url text,
      about text,
      created_at timestamp DEFAULT NOW() NOT NULL,
      updated_at timestamp DEFAULT NOW() NOT NULL
    );
  `;

  try {
    const res = await pool.query(createUsersTableQuery);
    console.log("🎉 users table created successfully");
  } catch (error) {
    console.error("⚠️ error creating users table", error);
  }
};

const createEventsTable = async () => {
  const createEventsTableQuery = `
    CREATE TABLE IF NOT EXISTS events (
      id serial PRIMARY KEY,
      user_id int NOT NULL,
      title varchar(255) NOT NULL,
      start_date date NOT NULL,
      end_date date NOT NULL,
      start_time time NOT NULL,
      end_time time NOT NULL,
      category varchar(50) NOT NULL,
      created_at timestamp DEFAULT NOW() NOT NULL,
      updated_at timestamp DEFAULT NOW() NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `;

  try {
    const res = await pool.query(createEventsTableQuery);
    console.log("🎉 events table created successfully");
  } catch (error) {
    console.error("⚠️ error creating events table", error);
  }
};

const createJournalsTable = async () => {
  const createJournalsTableQuery = `
    CREATE TABLE IF NOT EXISTS journals (
      id serial PRIMARY KEY,
      user_id int NOT NULL,
      title varchar(255) NOT NULL,
      inspiration text,
      gratitude text,
      goals text,
      notes text,
      created_at timestamp DEFAULT NOW() NOT NULL,
      updated_at timestamp DEFAULT NOW() NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `;

  try {
    const res = await pool.query(createJournalsTableQuery);
    console.log("🎉 journals table created successfully");
  } catch (error) {
    console.error("⚠️ error creating journals table", error);
  }
};

createUsersTable();
createEventsTable();
createJournalsTable();
