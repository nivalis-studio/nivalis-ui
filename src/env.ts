import { z } from 'zod';
import type { ZodSafeParseResult } from 'zod';
import type { util } from 'zod/v4/core';

// WARN: when adding env variables here
// ⚠️ don't forget to also put them in turbo.json

const serverSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
});

const clientSchema = z.object({
  NEXT_PUBLIC_VERCEL_URL: z.string().optional().default(''),
});

const processEnv = {
  // clientSchema keys
  NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,

  // serverSchema keys
  NODE_ENV: process.env.NODE_ENV,
};

const mergedSchema = z.object({ ...clientSchema.shape, ...serverSchema.shape });

type MergedInput = z.input<typeof mergedSchema>;
type MergedOutput = z.infer<typeof mergedSchema>;
type MergedSafeParseReturn = ZodSafeParseResult<
  util.Extend<MergedInput, MergedOutput>
>;

/* eslint-disable-next-line import/no-mutable-exports */
let env = null as unknown as MergedOutput;

const isServer = typeof window === 'undefined';

const parsed = (
  isServer
    ? mergedSchema.safeParse(processEnv) // on server we can validate all env vars
    : clientSchema.safeParse(processEnv)
) as MergedSafeParseReturn; // on client we can only validate the ones that are exposed

if (!parsed.success) {
  console.error(
    '❌ Invalid environment variables:',
    z.treeifyError(parsed.error),
  );

  throw new Error('Invalid environment variables');
}

env = parsed.data;

export { env as ENV };
