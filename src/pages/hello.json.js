// Enable the netlify adapter in astro.config.mjs to access this route at /hello.json

export async function get() {
  return new Response(JSON.stringify({ message: "Hello World from hello.json" }), {
    status: 200,
  });
}
