import { z } from 'zod';

const envSchema = z.object({
  VITE_APP_API_URL: z.string().min(1),
});

const _env = envSchema.safeParse(import.meta.env);

if (!_env.success)
  throw new Error('Invalid enviroment variables check your .env');

export const env = _env.data;
