// Enable the netlify adapter in astro.config.mjs to access this route at /hello

export async function get() {
  return new Response(JSON.stringify({ message: "Hello World from hello.js" }), {
    status: 200,
  });
}
