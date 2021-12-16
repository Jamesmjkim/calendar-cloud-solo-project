const express = require('express');
const uploadController = require('../controllers/uploadController');

const router = express.Router();
const { uploadFile, getFiles, deleteFile, downloadFile } = uploadController;

router.get('/:username', getFiles, (req, res) => {
  return res.status(200).send(res.locals.fileInfo);
  // return res.sendStatus(200);
});

router.post('/', uploadFile, (req, res) => {
  return res.status(200).json(res.locals.fileData);
});

router.get('/:username/:fileName', downloadFile, (req, res) => {
  return res.status(200).send(res.locals.file);
});

router.delete('/:username/:fileName', deleteFile, (req, res) => {
  return res.status(200).json(res.locals.fileData);
});

module.exports = router;
