import React from "react";

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-black w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-xl font-semibold mb-4">{content.doa}</h2>
        <div className="flex flex-col gap-3">
          <p dir="rtl">{content.ayat}</p>
          <small className="italic">{content.latin}</small>
          <p>"{content.artinya}"</p>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-[#45a29e] text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
