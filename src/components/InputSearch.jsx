import React from "react";
import Button from "./Button";
import { HiOutlineSearch } from "react-icons/hi";

const InputSearch = ({ placeholder }) => {
  return (
    <div className=" container rounded-xl p-2 pl-12 bg-white flex justify-between border-2">
      <div className="flex items-center gap-4 w-full">
        <HiOutlineSearch className="text-gray-400 text-xl " />
        <input
          placeholder={placeholder}
          className="bg-transparent outline-0 w-full h-full"
        />
      </div>
      <Button variant="default" className="px-8">
        Cari
      </Button>
    </div>
  );
};

export default InputSearch;
