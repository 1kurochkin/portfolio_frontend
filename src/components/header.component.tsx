import React from "react";

function Header() {
  return (
    <header className="pl-2 pr-2 pt-5 flex flex-col fixed top-0 left-0 right-0">
      <div className="flex self-end items-center">
        <nav className="hover:underline">#about</nav>
        <nav className="ml-10 hover:underline">#skills</nav>
        <nav className="ml-10 hover:underline">#work_expirience</nav>
        <nav className="ml-10 hover:underline">#projects</nav>
        <button className="ml-10 mr-5 p-2 pl-5 pr-5 border-2 border-dashed hover:border-solid">
          RESUME
        </button>
      </div>
      <p className="mt-3 overflow-hidden max-w-full">
        ========================================================================================================================================================================================================================================================================================================================================================================================================================================================================
      </p>
    </header>
  );
}

export default Header;
