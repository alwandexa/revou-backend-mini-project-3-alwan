import express, { json } from "express";

import { logRequest } from "./middlewares/logger";
import { getUrl, shortUrl } from "./controllers/url";

const app = express();

app.use(logRequest);

app.post("/shorten", json(), shortUrl);
app.get("/shorten/:short_url", getUrl);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
