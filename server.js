const app = require("./app");
const connectDB = require("./config/db");

const start = async () => {
    try {
        await connectDB();

        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is working on ${process.env.PORT || 5000}`);
        });
    } catch (err) {
        console.log(err);
    }
};

start();
