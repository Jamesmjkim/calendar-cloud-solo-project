const uploadController = {};
const userData = require('./../models/userDataModel');
const s3 = require('./../aws.js');

uploadController.getFiles = (req, res, next) => {
  const { username } = req.params;
  userData
    .findOne({ username })
    .then((userData) => {
      res.locals.files = userData.files;
      // console.log(userData);
      return next();
    })
    .catch((err) => {
      if (err)
        return next({
          log: `Error with uploadController.getFiles Error: ${err}`,
          message: {
            err: 'uploadController.getFiles ERROR: Check server logs for details',
          },
        });
    });
};

uploadController.uploadFile = (req, res, next) => {
  if (req.files === null) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  const { file } = req.files;
  const { username, date } = req.body;
  const [fileName, fileType] = file.name.split('.');

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${username}/${file.name}`,
    Body: file.data,
  };
  s3.upload(params, (err, data) => {
    if (err) {
      return next({
        log: `Error with uploadController.uploadFile Error: ${err}`,
        message: {
          err: 'uploadController.uploadFile ERROR: Check server logs for details',
        },
      });
    }
    userData
      .updateOne(
        { username },
        {
          $push: {
            files: {
              date: date,
              fileName: fileName,
              fileType: fileType,
              fileSize: file.fileSize,
              path: `${username}/${file.name}`,
            },
          },
        }
      )
      .then((data) => {
        console.log(data);
        return next();
      })
      .catch((err) => {
        return next({
          log: `Error with uploadController.uploadFile Error: ${err}`,
          message: {
            err: 'uploadController.uploadFile ERROR: Check server logs for details',
          },
        });
      });
  });
};

uploadController.deleteFile = (req, res, next) => {
  const { username, fileName } = req.params;
  var params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${username}/${fileName}`,
  };
  s3.deleteObject(params, function (err, data) {
    if (err) console.log(err, err.stack);
    userData
      .updateOne(
        { username },
        {
          $pull: {
            files: {
              path: `${username}/${fileName}`,
            },
          },
        }
      )
      .then((data) => console.log(data))
      .catch((err) => {
        return next({
          log: `Error with uploadController.deleteFile Error: ${err}`,
          message: {
            err: 'uploadController.deleteFile ERROR: Check server logs for details',
          },
        });
      });
  });
  return next();
};

uploadController.downloadFile = (req, res, next) => {
  const { username, fileName } = req.params;
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${username}/${fileName}`,
  };
  s3.getObject(params, (err, data) => {
    if (err)
      return next({
        log: `Error with uploadController.downloadFile Error: ${err}`,
        message: {
          err: 'uploadController.downloadFile ERROR: Check server logs for details',
        },
      });
    else res.locals.file = data.Body;
    return next();
  });
};
module.exports = uploadController;
