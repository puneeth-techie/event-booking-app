import { env } from "./server/config/index.js";
import { connectDB } from "./server/db/index.js";
import { startApolloServer } from "./server/utils/index.js";
import http from "http";
import { app } from "./server/startup/index.js";

/** */
const server = http.createServer(app);

/** Starting Apollo Server */
await startApolloServer();

const port = env.dev.PORT;
server.listen(port, () => {
  console.log(`
    Server is up and running..!
    Query at "https://studio.apollographql.com/dev"
  `);
});
/** Starting MongoDB database */
await connectDB();

export default app;
