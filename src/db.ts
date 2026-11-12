import { Pool } from 'pg';

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL is missing. Check your .env file.');
}

// Strip ?sslmode=require if present so the explicit ssl config below handles it cleanly
const cleanUrl = databaseUrl.replace(/\?sslmode=require$/, '');

export const pool = new Pool({
  connectionString: cleanUrl,
  ssl: { rejectUnauthorized: false }
});