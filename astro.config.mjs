import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify";

/**
 * You can use netlify dev (Netlify CLI) to run serverless functions
 * stored in netlify/functions.
 * This will not affect the static generation of the Astro project.
 *
 * If you uncomment adapter: netlify() in the config,
 * every route in the pages directory becomes a SSR route.
 */

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  // adapter: netlify(),
});
