var express = require("express");
require("./config/config");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var passport = require("passport");
var session = require("express-session");
var SQLiteStore = require("connect-sqlite3")(session);
var morgan = require("morgan");
var helmet = require("helmet");

// Routers
const indexRouter = require("./routes/routes");

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
//app.use(express.static(path.join(__dirname, "public")));
app.enable("trust proxy");

// Passport
app.use(passport.initialize());
app.use(passport.session());
//app.use(passport.authenticate('session'));

// Cookie Parser
app.use(cookieParser());

//Session
const cookieKey = process.env.COOKIE_SESSION_KEY;
const cookieName = process.env.COOKIE_SESSION_NAME;
const cookieExpires = process.env.COOKIE_EXPIRATION_MS;

app.use(
  session({
    store: new SQLiteStore(),
    secret: cookieKey,
    name: cookieName,
    resave: false,
    saveUninitialized: true,
    rolling: true,
    Cookie: {
      path: "/",
      secure: true,
      expires: Date.now() + parseInt(cookieExpires, 10),
      maxAge: parseInt(cookieExpires, 10),
      httpOnly: true,
      sameSite: "none",
    },
  })
);

// Helmet (no-cache)
app.use(helmet());

app.use(morgan("dev"));
app.use(morgan("combined"));

// Routes
app.use("/", indexRouter);

const port = process.env.PORT || 7242;

app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);

module.exports = app;
