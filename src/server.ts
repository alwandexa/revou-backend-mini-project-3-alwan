import express, { json } from "express";
import { nanoid } from "nanoid";

const app = express();

let urlMap = new Map();

const shortUrl = (req: express.Request, res: express.Response) => {
  const { url } = req.body;

  if (url) {
    const urlId = nanoid(10);
    urlMap.set(urlId, url);

    res.contentType("application/json").status(200);
    res.json({
      success: true,
      message: "successfully registered",
      shorten: urlId,
    });
  } else {
    res.contentType("application/json").status(400);
    res.json({
      success: false,
      message: "url is not specified",
    });
  }
};

const getUrl = (req: express.Request, res: express.Response) => {
  const { short_url } = req.params;
  const url = urlMap.get(short_url);

  if (url) {
    res.status(301);
    res.redirect(url);
  } else {
    res.contentType("application/json").status(404);
    res.json({
      success: false,
      message: "url is not registered",
    });
  }
};

app.post("/shorten", json(), shortUrl);
app.get("/shorten/:short_url", getUrl);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
