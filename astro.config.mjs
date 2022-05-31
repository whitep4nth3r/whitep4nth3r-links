import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify";


/**
 * you can use netlify dev to run serverless functions in netlify/functions
 * and not affect the generation of the Astro site -- cached by default
 * 
 * however
 * 
 * if you add the netlify adaptor — everything in the site becomes a SSR route -- the whole site is uncached by default
*/

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte()],
  adapter: netlify(),
});
