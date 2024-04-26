const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

async function startServer() {
    try {
        mongoose
            .connect(process.env.MONGODB_)
            .then(() => { console.log("Database connected"); })
            .catch((err) => { console.log(err); }) 

            const PORT = process.env.PORT;
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}.`);
            })
    } catch (err) {
        console.log("Cannot connect to the database err:", err);
        process.exit();
    }
};

startServer();