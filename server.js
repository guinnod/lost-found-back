const app = require("./app");
const env = require("dotenv");
const connectDB = require("./config/db");

env.config();

const start = async () => {
    try {
        await connectDB();

        app.listen(process.env.PORT, () => {
            console.log(`Server is working on ${process.env.PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
};

start();
