import React from "react";
import { PiAtom } from "react-icons/pi";

const Header = () => {
  return (
    <header className="w-full bg-[#1f2833] p-4 flex items-center justify-center gap-3 text-4xl font-bold cursor-pointer shadow-sm shadow-white">
      <PiAtom />
      <h1>Daftar Doa Sehari - Hari</h1>
      <PiAtom />
    </header>
  );
};

export default Header;
