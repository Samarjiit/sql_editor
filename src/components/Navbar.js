import React from 'react';
import { BsGithub } from 'react-icons/bs';

export function Navbar() {
  return (
    <>
      <header className="flex items-center h-20 px-6 sm:px-10 bg-blue-300 shadow-lg w-full">
        <div>
          <h1 className="font-bold text-[40px] ">SQL Editor</h1>
        </div>
        <div className="flex flex-shrink-0 items-center ml-auto">
          <a href="https://github.com/Samarjiit/sql_editor">
            <p className="inline-flex font- text-[20px]">
              <BsGithub className="mx-2" size={35} />
              View on GitHub
            </p>
          </a>
        </div>
      </header>
    </>
  );
}
