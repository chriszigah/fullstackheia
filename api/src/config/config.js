var dotenv = require("dotenv");

process.env.NODE_ENV === undefined || "test"
  ? dotenv.config({ path: "./src/dev.env" })
  : dotenv.config();
