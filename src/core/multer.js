const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

aws.config.update({
    secretAccessKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    accessKeyId: 'XXXXXXXXXXXXXXX',
    region: 'us-east-1'
});

s3 = new aws.S3();

const multerOptions = {
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop();
        cb(null, `${file.fieldname}-${new Date().getTime()}.${ext}`);
    }
}

const extensiones = ['jpg', 'gif', 'png'];
const fileFilter = (req, file, cb) => {
    const extension = file.originalname.split('.').pop().toLowerCase();
    const flag = extensiones.includes(extension);
    cb(null, flag);
}

const multerStorage = multer.diskStorage(multerOptions);
/*const multerStorage = multerS3({
    s3: s3,
    bucket: 'arn:aws:s3:::proyectopae2022',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
        const ext = file.originalname.split('.').pop();
        cb(null, `${file.fieldname}-${new Date().getTime()}.${ext}`);
    }
  });*/

module.exports = multer({storage: multerStorage, fileFilter});



