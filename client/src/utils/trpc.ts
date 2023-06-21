import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../../../server/src/trpc/router';
// import type { AppRouter } from '@/server/trpc/router';

export const trpc = createTRPCReact<AppRouter>();
