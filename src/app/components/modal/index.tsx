import React, { useState } from "react";

const Modal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg relative w-11/12 max-w-3xl">
        {/* Close button */}
        <button className="absolute top-2 right-2" onClick={onClose}>
          ✖
        </button>

        {/* Google Form iframe */}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfUxUK1Tukyg-utADIoRFi1g73b8cHG7v1cDK1U7nmtt8nM4A/viewform?embedded=true"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="w-full h-[700px]"
          allowFullScreen
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Modal;
