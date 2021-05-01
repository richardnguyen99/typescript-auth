/**
 * Configuration for PostgresQL connection
 */
import { Pool, Client } from "pg";

export const pool = new Pool();
export const client = new Client();
