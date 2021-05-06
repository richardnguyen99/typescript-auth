/**
 * Configuration for PostgresQL connection
 */
import { Pool, Client } from "pg";

export const pool = typeof process.env.DATABASE_URL !== "undefined"
  ? new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } })
  : (typeof process.env.TRAVIS !== "undefined"
    ? new Pool({
      user: "postgres",
      database: "travis_ci_test",
      password: "postgres",
      port: 5432,
      max: 10,
    })
    : new Pool());

export const client = typeof process.env.DATABASE_URL !== "undefined"
  ? new Client({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } })
  : new Client();

