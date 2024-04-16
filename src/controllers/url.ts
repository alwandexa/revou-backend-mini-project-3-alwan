import { Request, Response } from "express";
import { nanoid } from "nanoid";

let urlMap = new Map();

const shortUrl = (req: Request, res: Response) => {
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

const getUrl = (req: Request, res: Response) => {
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

export { shortUrl, getUrl };
