import React from "react";

const DoaCard = ({ doa, onClick }) => {
  return (
    <div
      className="bg-[#45a29e] text-white p-4 h-24 rounded flex justify-center items-center cursor-pointer hover:shadow-md hover:shadow-[#66fcf1] transition-all"
      role="button"
      tabIndex={0}
      onClick={onClick}
    >
      {doa}
    </div>
  );
};

export default DoaCard;
