import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('production'),
    OPENAI_API_KEY: z.string().startsWith('sk-'),
  },
  client: {
    NEXT_PUBLIC_BASE_URL: z.preprocess(
      (val) =>
        val ??
        (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
        (process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : undefined),
      z.url()
    ),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
})
