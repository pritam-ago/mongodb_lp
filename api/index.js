const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("../models/shortUrl");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://pritam:2CQZ1T2RlNig9zIV@mongooselp.o6gtn.mongodb.net/mongooseTesting?retryWrites=true&w=majority");

app.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render("index", { shortUrls: shortUrls });
});

app.post("/shortUrls", async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });
  res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shortUrl.full);
});

// Export the app for Vercel
module.exports = app;
