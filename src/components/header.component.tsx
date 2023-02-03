import { useEffect, useState } from "react";
import { useScrollDirection } from "../hooks/useScrollDirection.hook";

function Header() {

  const scrollDirection = useScrollDirection();
  
  const navLinks = [
    { value: "about" },
    { value: "skills" },
    { value: "work_expirience" },
    { value: "projects" },
    { value: "contacts" },
  ];
  return (
    <header className={`${ scrollDirection === "down" ? "-top-24" : "top-0"} transition-all duration-500 bg-inherit font-bold border-b-2 border-double px-2 py-5 flex items-center justify-end sticky top-0 left-0 right-0 text-lg`}>
      {navLinks.map(({ value }, index) => (<>
      {index !== 0 && <span className="mx-5">|</span>}
        <nav  className="cursor-pointer border-b-2 border-green-500 hover:text-green-500">
          <span className="text-green-500">{"> "}</span>
          <a href={`/#${value}`}>{value}</a>
        </nav>
      </>))}
      <button className="ml-10 mr-5 p-2 px-5 border-2 border-green-500 hover:border-solid hover:text-green-500">
        resume
      </button>
    </header>
  );
}

export default Header;
