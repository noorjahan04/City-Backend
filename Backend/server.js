const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");

dotenv.config();
// Import routes
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const adminRoutes = require("./routes/adminRoutes"); 
const reviewRoutes = require("./routes/reviewRoutes")
const employeeRoutes = require("./routes/employeeRoutes")
const complaintsRoutes = require("./routes/complaintRoutes")
const chatbotRoutes = require("./routes/chatRoutes")
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:3000"
  ],
  credentials: true,
}));
app.use(cookieParser());
app.use(passport.initialize());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/admin", adminRoutes); 
app.use("/api/review", reviewRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/complaints", complaintsRoutes);
app.use("/api/chatbot", chatbotRoutes);


// Root route
app.get("/", (req, res) => {
  res.send("✅ Make my city Backend is running!");
});

// MongoDB connection and server start
mongoose.connect(process.env.MONGO_URI, {
 
})
.then(() => {
  console.log("✅ MongoDB connected");
  app.listen(process.env.PORT || 5000, () => {
    console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
  });
})
.catch((err) => {
  console.error("❌ DB connection failed:", err.message);
});
