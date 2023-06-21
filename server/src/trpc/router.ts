import { z } from "zod";
// client throws errors if TRPC is imported with path alias
import { publicProcedure, router } from "@/server/trpc/trpc";
// use relative imports instead
// import { publicProcedure, router } from "./trpc";

export const appRouter = router({
	greeting: publicProcedure
		// This is the input schema of your procedure
		// 💡 Tip: Try changing this and see type errors on the client straight away
		.input(
			z
				.object({
					name: z.string().nullish(),
				})
				.nullish(),
		)
		.query(({ input }) => {
			// This is what you're returning to your client
			return {
				text: `hello ${input?.name ?? 'world'}`,
				// 💡 Tip: Try adding a new property here and see it propagate to the client straight-away
			};
		}),
});

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;