import { drizzle } from 'drizzle-orm/neon-http';
import { env } from '$env/dynamic/private';

const db = env.DATABASE_URL ? drizzle(env.DATABASE_URL) : null;
