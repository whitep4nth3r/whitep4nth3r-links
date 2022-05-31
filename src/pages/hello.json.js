//access at hello.json

export async function get() {
  return new Response(JSON.stringify({ message: "Hello World from hello.json" }), {
    status: 200,
  });
}
