/**
 * Configuration for PostgresQL connection
 */
import { Pool, Client } from "pg";



export const pool = typeof process.env.DATABASE_URL === "undefined" ? new Pool({ connectionString: process.env.DATABASE_URL }) : new Pool();
export const client= typeof process.env.DATABASE_URL === "undefined" ? new Client({ connectionString: process.env.DATABASE_URL }) : new Client();
