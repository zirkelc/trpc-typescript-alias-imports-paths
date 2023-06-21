/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */
import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

export const publicProcedure = t.procedure;
export const router = t.router;