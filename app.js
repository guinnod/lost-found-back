const express = require("express");
require('dotenv').config();
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Validation Middleware
const authenticateUser = require('./middleware/authentication');

// Route imports
const chatRouter = require("./routes/ChatRoutes");
const authRouter  = require("./routes/AuthRoutes");
const userRouter  = require("./routes/UserRoutes");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/chat", authenticateUser, chatRouter);
app.use("/api/v1/user", authenticateUser, userRouter);

// Error Handling Middlewares
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require("./middleware/error-handler")

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app
