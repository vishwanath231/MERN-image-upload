const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, res, cd){
        cd(null, 'frontend/public/image/upload');
    },
    filename: function(req, file, cb){
        cb(null, uuidv4()+ '-' + Date.now() + path.extname(file.originalname));
    }
})

const fileFilter = (req, file, cb) => {
    const allowedFileType = ['image/jpeg', 'image/jpg', 'image/png'];

    if (allowedFileType.includes(file.mimetype)) {
        cb(null, true);
    }else{
        cb(null, false)
    }
}

const upload = multer({ storage, fileFilter });

module.exports = upload;