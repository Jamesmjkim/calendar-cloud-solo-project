const express = require('express');
const uploadController = require('../controllers/uploadController');

const router = express.Router();
const { uploadFile, getFiles, deleteFile } = uploadController;

router.get('/', getFiles, (req, res) => {
  // return res.status(200).json(res.locals.fileInfo);
  return res.sendStatus(200);
});

router.post('/', uploadFile, (req, res) => {
  return res.status(200).json(res.locals.fileData);
});

// router.delete('/', deleteFile, (req, res) => {
//   return res.status(200).json(res.locals.success);
// });

module.exports = router;
