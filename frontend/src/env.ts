import { z } from 'zod'

const envSchema = z.object({
    BACKEND_URI: z.string().url(),
    HOST: z.string(),
    PASS_DEFAULT: z.string(),
})

export const env = envSchema.parse(process.env)