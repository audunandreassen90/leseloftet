import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify({ logger: true });

await app.register(cors, {
  origin: true
});

app.get("/", async () => {
  return { message: "Leseloftet backend fungerer!" };
});

const PORT = process.env.PORT || 3000;

app.listen({ port: PORT, host: "0.0.0.0" })
  .then(() => {
    console.log("Server running on port", PORT);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
