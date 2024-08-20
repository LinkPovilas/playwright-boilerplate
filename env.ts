import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  CI: z.union([z.string(), z.boolean()]).default(false),
  BASE_URL: z.string().url()
});

const env = envSchema.parse(process.env);

export default env;
