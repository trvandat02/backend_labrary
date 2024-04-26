const express = require('express');
const multer = require('multer');
const path = require('path');
const file = require('../controllers/upload.controller');

const router = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './app/assets/')
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.substring(0, file.originalname.indexOf('.'));
        cb(null, fileName + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), file.upload);

module.exports = router;