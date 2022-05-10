const multer = require('multer');

const multerOptions = {
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop();
        cb(null, `${file.fieldname}-${new Date().getTime()}.${ext}`);
    }
}

const extensiones = ['jpg', 'gif'];
const fileFilter = (req, file, cb) => {
    const extension = file.originalname.split('.').pop().toLowerCase();
    const flag = extensiones.includes(extension);
    cb(null, flag);
}

const multerStorage = multer.diskStorage(multerOptions);

module.exports = multer({storage: multerStorage, fileFilter});