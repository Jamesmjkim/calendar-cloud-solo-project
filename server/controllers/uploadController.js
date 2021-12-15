const uploadController = {};
const userData = require('./../models/userDataModel');

uploadController.getFiles = (req, res, next) => {
  const { username } = req.body;
  userData
    .findOne({ username })
    .then((data) => {
      res.locals.files = data.files;
      return next();
    })
    .catch((err) => {
      if (err)
        return next({
          log: `Error with fileController.getFiles Error: ${err}`,
          message: {
            err: 'fileController.getFiles ERROR: Check server logs for details',
          },
        });
    });
};

uploadController.uploadFile = (req, res, next) => {
  if (req.files === null) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  const { file, username } = req.files;
  const [fileName, fileType] = file.name.split('.');
  userData.updateOne(
    { username },
    {
      date: new Date().toDateString(),
      fileName: fileName,
      fileType: fileType,
      fileSize: file.fileSize,
      path: `${username}/${file.name}`,
    }
  );
};
module.exports = uploadController;
