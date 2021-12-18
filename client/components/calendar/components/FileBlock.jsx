import React from 'react';
import FileBlockModal from './FileBlockModal.jsx';
const FileBlock = ({
  fileToday,
  showFileModal,
  setShowFileModal,
  openFileModal,
}) => {
  const { fileName, fileType, fileSize, date } = fileToday[0];
  return (
    <button
      className='border border-info text-start mb-1 p-0'
      style={{
        fontSize: '11px',
        width: '8vw',
        background: 'none',
        maxWidth: '143.36px',
      }}
      onClick={openFileModal}
    >
      <FileBlockModal
        showFileModal={showFileModal}
        setShowFileModal={setShowFileModal}
        fileName={fileName}
        fileType={fileType}
        fileSize={fileSize}
        date={date}
      />

      {fileName + '.' + fileType}
    </button>
  );
};
export default FileBlock;
