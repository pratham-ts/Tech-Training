import { Pool } from "pg";

import dotenv from "dotenv";
dotenv.config({ path: "src/.env" });

export const pool: Pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT!),
});
