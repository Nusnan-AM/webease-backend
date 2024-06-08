import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./backend/config/mongoDB.js";
import authRouter from "./routes/auth.routes.js"
import userRouter from "./routes/user.routes.js"
import notFound from "./backend/middlewares/notFoundMiddleware.js";
import errorMiddleware from "./backend/middlewares/errorMiddleware.js";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(cors({
    origin: process.env.FRONTEND_API_URL, // specify the exact origin
    credentials: true, // allow credentials
  }));

app.use(express.json());
app.use(cookieParser());//parse cookies

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

app.use(notFound);
app.use(errorMiddleware);

app.listen(port, () => {
    connectDB();
    console.log(`Server started at http://localhost:${port}`);
});