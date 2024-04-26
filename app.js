const express = require('express');
const cors = require('cors');
const ApiError = require('./app/api-error');
const cookieParser = require('cookie-parser');

const { 
    UserRouter, 
    BookRouter, 
    LoginRouter, 
    FileRouter, 
    BorrowedBookRouter, 
    PublisherRouter, 
    AdminRouter
} = require('./app/routes');

const app = express();

app.use(cors({
        origin: ["http://localhost:3002", "http://localhost:3003"],
        methods: ["POST", "GET", "PUT", "PATCH", "DELETE"],
        credentials: true,
        preflightContinue: true,
        optionsSuccessStatus: 200
      }
));
app.use(express.json());

app.use(express.static("./app/assets"));

app.use(cookieParser());

app.use('/api/users', UserRouter);

app.use('/api/admin', AdminRouter);

app.use('/api/books', BookRouter);

app.use('/api/publishers', PublisherRouter);

app.use('/api/borrowedbooks', BorrowedBookRouter);

app.use('/api/log/', LoginRouter);

app.use('/api/file', FileRouter);

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((req, res, next) => {
    return next(new ApiError(500, "Internal Server Error"));
});

module.exports = app;