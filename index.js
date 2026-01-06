require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const { databaseConnection } = require("./database/connectionDb");
const { shouldCompress } = require("./config/compression");

// Import Routes
const uploadRoute = require("./routes/uploadRoutes");
const uploadFileRoute = require("./routes/uploadFileRoutes");
const userRoutes = require("./routes/userRoutes");
const aboutusRoutes = require("./routes/aboutusRoutes");
const aboutusDeptRoutes = require("./routes/aboutusDeptRoutes");
const afflicatesRoutes = require("./routes/afflicatesRoutes");
const awardsRoutes = require("./routes/awardsRoutes");
const branchesRoutes = require("./routes/branchesRoutes");
const brandsRoutes = require("./routes/brandsRoutes");
const careersRoutes = require("./routes/careersRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const clientsRoutes = require("./routes/clientsRoutes");
const contactRoutes = require("./routes/contactRoutes");
const coreBusinessRoutes = require("./routes/coreBusinessRoutes");
const eventRoutes = require("./routes/eventRoutes");
const facilityRoutes = require("./routes/facilityRoutes");
const homeRoutes = require("./routes/homeRoutes");
const homeDeptRoutes = require("./routes/homeDeptRoutes");
const mailingListRoutes = require("./routes/mailingListRoutes");
const mailingListDeptRoutes = require("./routes/mailingListDeptRoutes");
const milestoneRoutes = require("./routes/milestoneRoutes");
const milestoneDeptRoutes = require("./routes/milestoneDeptRoutes");
const newsRoutes = require("./routes/newsRoutes");
const projectRoutes = require("./routes/projectRoutes");
const qhseRoutes = require("./routes/qhseRoutes");
const qualificationRoutes = require("./routes/qualificationRoutes");
const qualificationLocRoutes = require("./routes/qualificationLocRoutes");
const quotationRoutes = require("./routes/quotationRoutes");
const regionRoutes = require("./routes/regionRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const subCategoryRoutes = require("./routes/subCategoryRoutes");
const supportServiceRoutes = require("./routes/supportServiceRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");

const app = express();

// 1. CORS CONFIGURATION
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "http://localhost:5176",
  "https://nbtc-group.vercel.app",
  "https://nbtc-admin.vercel.app",
  "https://duct-fabrication-nbtc.vercel.app",
  "https://equipment-division-nbtc.vercel.app",
  "https://heavy-engineering.vercel.app",
  "https://readymixsupply-division-nbtc.vercel.app",
  "https://scaffolding-division-nbtc.vercel.app",
  "https://steel-trading-division-nbtc.vercel.app",
  "https://technical-services-division-nbtc.vercel.app",
  "https://trading-division-nbtc.vercel.app",
  "https://vehicle-body-manufacturing-nbtc.vercel.app",
  "https://nbtcgroup.com",
  "https://www.nbtcgroup.com",
  "https://admin.nbtcgroup.com",
  "https://heavy-engineering.nbtcgroup.com",
  "https://equipment-division.nbtcgroup.com",
  "https://specialized-services.nbtcgroup.com",
  "https://techical-services.nbtcgroup.com",
  "https://ready-mix.nbtcgroup.com",
  "https://trading.nbtcgroup.com",
  "https://steel-trading.nbtcgroup.com",
  "https://vehicle-body.nbtcgroup.com",
  "http://admin.nbtcgroup.com"
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
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
app.use(compression({ filter: shouldCompress, level: 6 }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// 4. ROUTES
const startRoutes = () => {
  app.get("/", (req, res) => {
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
const port = process.env.PORT || 5000;

databaseConnection()
  .then(() => {
    startRoutes();
    app.listen(port, () =>
      console.log(`Server Listening @ ${port}`)
    );
  })
  .catch((error) => {
    console.error("Failed to Start Server: ", error);
  });