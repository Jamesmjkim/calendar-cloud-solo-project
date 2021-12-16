const uploadController = {};
const userData = require('./../models/userDataModel');
const s3 = require('./../aws.js');

uploadController.getFiles = (req, res, next) => {
  const { username } = req.body;
  console.log(username, req.body);
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: 'qwer/VS code keyboard-shortcuts-macos.pdf',
  };
  s3.getObject(params, (err, data) => {
    if (err)
      return next({
        log: `Error with uploadController.getFiles Error: ${err}`,
        message: {
          err: 'uploadController.getFiles ERROR: Check server logs for details',
        },
      });
    else console.log(data);
  });
  userData
    .findOne({ username })
    .then((userData) => {
      console.log(userData);
      // const params = {
      //   Bucket: process.env.AWS_BUCKET_NAME,
      //   Key: userData.files[0].path,
      // };
      // s3.getObject(params, (err, data) => {
      //   if (err)
      //     return next({
      //       log: `Error with uploadController.getFiles Error: ${err}`,
      //       message: {
      //         err: 'uploadController.getFiles ERROR: Check server logs for details',
      //       },
      //     });
      //   else console.log(data);
      // });
      // res.locals.files = data.files;
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
module.exports = uploadController;
