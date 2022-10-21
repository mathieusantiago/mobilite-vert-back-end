//import dependencies
const express = require("express");
const session = require('express-session');
const MemoryStore = require('memorystore')(session)
require("dotenv").config();
require("./config/db");
const cors = require("cors");
const app = express();
// const cookieParser = require("cookie-parser");
const { checkUser, requireAuth } = require("./middleware/auth.middleware");
//import routes
const userRoutes = require("./routes/user.routes");
const articleRoutes = require("./routes/article.routes");
const categorieRoutes = require("./routes/categorie.routes");
const subCategorieRoutes = require("./routes/subCategorie.routes");
const galleryRoutes = require("./routes/gallery.routes");
const roleRoutes = require("./routes/role.routes");
const fieldEnergy = require("./routes/fieldEnergy.routes");
const fieldBrand = require("./routes/fieldBrand.routes");
const fieldModel = require("./routes/fieldModel.routes");
const tags = require("./routes/tags.routes.js");
const gAnalytics = require("./routes/gAnalytics.routes.js");

//createe cors option
const corsOptions = {
  origin:[process.env.CLIENT_URL, process.env.DOCS_URL, process.env.BACKOFFICE_URL],
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

//create session express 
app.use(session({
  store: new MemoryStore({
    checkPeriod: 86400000 // prune expired entries every 24h
  }),
  resave: false,
  secret: 'keyboard cat',
  cookie: {
      path: '/',
      domain: 'onrender.com',
      maxAge: 1000 * 60 * 24 // 24 hours
  }
}));

app.use((req, res, next) =>{
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});
//Use dependencies
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

//Route jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

// Routes
app.use('/api/analytics', gAnalytics);
app.use("/api/user", userRoutes);
app.use("/api/article", articleRoutes);
app.use("/api/categorie", categorieRoutes);
app.use("/api/subcategorie", subCategorieRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/role", roleRoutes);
app.use("/api/fieldEnergy", fieldEnergy);
app.use("/api/fieldBrand", fieldBrand);
app.use("/api/fieldModel", fieldModel);
app.use("/api/tags", tags);

//Server
app.listen(process.env.PORT, () => {
  console.log(`🎯 Server running on port ${process.env.PORT}`);
});

module.exports = app;
