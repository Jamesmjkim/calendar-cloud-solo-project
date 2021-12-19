import React from 'react';

const UserFilesBody = ({
  date,
  fileName,
  fileType,
  fileSize,
  path,
  deleteFile,
}) => {
  return (
    <div className='container' style={{ padding: '0px 12px 0px 12px' }}>
      <div className='row'>
        <div className='col-3 border'>{date}</div>
        <div className='col-3 border'>
          <a href={`/upload/${path}`} className=' text-black'>
            {fileName}
          </a>
        </div>
        <div className='col-3 border'>{fileType}</div>
        <div className='col-2 border'>{fileSize}</div>
        <button className='col-1 border' id={path} onClick={deleteFile}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default UserFilesBody;
