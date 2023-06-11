const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const userRoutes = require("./Routes/User");
const profileRoutes = require("./Routes/Profile");
const courseRoutes = require("./Routes/Course");
const paymentRoutes = require("./Routes/Payment");

const database = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");

const app = express();

dotenv.config();
const port = process.env.PORT || 4000;
console.log(port);

database.connect();
cloudinaryConnect();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
