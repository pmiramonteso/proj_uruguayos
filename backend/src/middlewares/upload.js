const util = require("util");
const multer = require("multer");
const path = require("path");

// Tamaño máximo del archivo: 2MB
const maxSize = 2 * 1024 * 1024;

// Configuración de almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

// Filtro para validar tipo de archivo
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|pdf/;
  const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = allowedTypes.test(file.mimetype);

  if (extName && mimeType) {
    cb(null, true);
  } else {
    cb(new Error("Tipo de archivo no permitido. Solo se permiten imágenes y PDFs."));
  }
};

// Configuración de multer
let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: fileFilter,
}).single("photo");

// Convertir a promesa para usar async/await
const uploadFileMiddleware = util.promisify(uploadFile);

module.exports = { uploadFileMiddleware };

