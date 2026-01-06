"use strict";

require("dotenv").config();
var express = require("express");
var cors = require("cors");
var path = require("path");
var compression = require("compression");
var cookieParser = require("cookie-parser");
var _require = require("./database/connectionDb"),
  databaseConnection = _require.databaseConnection;
var _require2 = require("./config/compression"),
  shouldCompress = _require2.shouldCompress;

// Import Routes
var uploadRoute = require("./routes/uploadRoutes");
var uploadFileRoute = require("./routes/uploadFileRoutes");
var userRoutes = require("./routes/userRoutes");
var aboutusRoutes = require("./routes/aboutusRoutes");
var aboutusDeptRoutes = require("./routes/aboutusDeptRoutes");
var afflicatesRoutes = require("./routes/afflicatesRoutes");
var awardsRoutes = require("./routes/awardsRoutes");
var branchesRoutes = require("./routes/branchesRoutes");
var brandsRoutes = require("./routes/brandsRoutes");
var careersRoutes = require("./routes/careersRoutes");
var categoryRoutes = require("./routes/categoryRoutes");
var clientsRoutes = require("./routes/clientsRoutes");
var contactRoutes = require("./routes/contactRoutes");
var coreBusinessRoutes = require("./routes/coreBusinessRoutes");
var eventRoutes = require("./routes/eventRoutes");
var facilityRoutes = require("./routes/facilityRoutes");
var homeRoutes = require("./routes/homeRoutes");
var homeDeptRoutes = require("./routes/homeDeptRoutes");
var mailingListRoutes = require("./routes/mailingListRoutes");
var mailingListDeptRoutes = require("./routes/mailingListDeptRoutes");
var milestoneRoutes = require("./routes/milestoneRoutes");
var milestoneDeptRoutes = require("./routes/milestoneDeptRoutes");
var newsRoutes = require("./routes/newsRoutes");
var projectRoutes = require("./routes/projectRoutes");
var qhseRoutes = require("./routes/qhseRoutes");
var qualificationRoutes = require("./routes/qualificationRoutes");
var qualificationLocRoutes = require("./routes/qualificationLocRoutes");
var quotationRoutes = require("./routes/quotationRoutes");
var regionRoutes = require("./routes/regionRoutes");
var serviceRoutes = require("./routes/serviceRoutes");
var subCategoryRoutes = require("./routes/subCategoryRoutes");
var supportServiceRoutes = require("./routes/supportServiceRoutes");
var testimonialRoutes = require("./routes/testimonialRoutes");
var app = express();

// 1. CORS CONFIGURATION
var allowedOrigins = ["http://localhost:5173", "http://localhost:5174", "http://localhost:5175", "http://localhost:5176", "https://nbtc-group.vercel.app", "https://nbtc-admin.vercel.app", "https://duct-fabrication-nbtc.vercel.app", "https://equipment-division-nbtc.vercel.app", "https://heavy-engineering.vercel.app", "https://readymixsupply-division-nbtc.vercel.app", "https://scaffolding-division-nbtc.vercel.app", "https://steel-trading-division-nbtc.vercel.app", "https://technical-services-division-nbtc.vercel.app", "https://trading-division-nbtc.vercel.app", "https://vehicle-body-manufacturing-nbtc.vercel.app", "https://nbtcgroup.com", "https://www.nbtcgroup.com", "https://admin.nbtcgroup.com", "https://heavy-engineering.nbtcgroup.com", "https://equipment-division.nbtcgroup.com", "https://specialized-services.nbtcgroup.com", "https://techical-services.nbtcgroup.com", "https://ready-mix.nbtcgroup.com", "https://trading.nbtcgroup.com", "https://steel-trading.nbtcgroup.com", "https://vehicle-body.nbtcgroup.com", "http://admin.nbtcgroup.com"];
var corsOptions = {
  origin: function origin(_origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!_origin) return callback(null, true);
    if (allowedOrigins.indexOf(_origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
  optionsSuccessStatus: 200
};

// Apply CORS globally
app.use(cors(corsOptions));

// 2. HANDLE PREFLIGHT (OPTIONS) REQUESTS
// This is likely the cause of your current error. Browsers send an OPTIONS request 
// before a POST/PUT login. This line ensures the server responds correctly to it.
app.options("*", cors(corsOptions));

// 3. OTHER MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(compression({
  filter: shouldCompress,
  level: 6
}));
app.use("/uploads", express["static"](path.join(__dirname, "uploads")));

// 4. ROUTES
var startRoutes = function startRoutes() {
  app.get("/", function (req, res) {
    res.send("API is running");
  });

  // Specific API routes
  app.use(uploadRoute);
  app.use(uploadFileRoute);
  app.use("/user", userRoutes);
  app.use("/aboutus", aboutusRoutes);
  app.use("/aboutus-department", aboutusDeptRoutes);
  app.use("/afflicates", afflicatesRoutes);
  app.use("/awards", awardsRoutes);
  app.use("/branches", branchesRoutes);
  app.use("/brands", brandsRoutes);
  app.use("/careers", careersRoutes);
  app.use("/category", categoryRoutes);
  app.use("/clients", clientsRoutes);
  app.use("/contact", contactRoutes);
  app.use("/core-business", coreBusinessRoutes);
  app.use("/event", eventRoutes);
  app.use("/facility", facilityRoutes);
  app.use("/home", homeRoutes);
  app.use("/home-department", homeDeptRoutes);
  app.use("/mailinglist", mailingListRoutes);
  app.use("/mailinglist-department", mailingListDeptRoutes);
  app.use("/milestones", milestoneRoutes);
  app.use("/milestones-department", milestoneDeptRoutes);
  app.use("/news", newsRoutes);
  app.use("/projects", projectRoutes);
  app.use("/qhse", qhseRoutes);
  app.use("/qualification", qualificationRoutes);
  app.use("/qualification-loc", qualificationLocRoutes);
  app.use("/quotation", quotationRoutes);
  app.use("/region", regionRoutes);
  app.use("/service", serviceRoutes);
  app.use("/sub-category", subCategoryRoutes);
  app.use("/support-service", supportServiceRoutes);
  app.use("/testimonial", testimonialRoutes);
};

// 5. START SERVER
var port = process.env.PORT || 5000;
databaseConnection().then(function () {
  startRoutes();
  app.listen(port, function () {
    return console.log("Server Listening @ ".concat(port));
  });
})["catch"](function (error) {
  console.error("Failed to Start Server: ", error);
});