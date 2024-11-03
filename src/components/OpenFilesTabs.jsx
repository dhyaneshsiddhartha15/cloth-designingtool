import React from 'react';
import { CgClose } from 'react-icons/cg';

const OpenFilesTabs = ({ fileTabs, setFileTabs, setOpenedFile }) => {
  const handleFileChange = (fileId) => {
    setFileTabs((prev) => {
      const tempFiles = prev.map((file) => {
        if (file._id == fileId) {
          file.isOpen = true;
          setOpenedFile(file.file);
        } else file.isOpen = false;
        return file;
      });

      return tempFiles;
    });
  };

  const handleCloseFile = (fileId) => {
    setFileTabs((prev) => prev.filter((file) => file._id !== fileId));
  };

  return (
    <ul
      className="flex text-xs bg-indigo-200 w-fit border max-h-[20px]"
      style={{
        clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, calc(100% ) 100%, 0 100%)',
      }}
    >
      {fileTabs.map((file) => {
        return (
          <li
            key={file._id}
            onClick={(e) => {
              e.stopPropagation();
              handleFileChange(file._id);
            }}
            className={`cursor-pointer text-indigo-100 flex justify-center items-center gap-2 pl-2 pr-4 rounded-sm  ${
              file.isOpen ? 'bg-indigo-900' : 'bg-indigo-200 text-slate-600'
            }`}
            style={{
              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, calc(100% ) 100%, 0 100%)',
            }}
          >
            {file?.name?.length < 20 ? file?.name : file?.name?.slice(0, 20) + '...'}
            <button
              className="hover:text-red-500 text-center"
              onClick={(e) => {
                e.stopPropagation();
                handleCloseFile(file._id);
              }}
            >
              <CgClose />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default OpenFilesTabs;
