import { useState } from "react";
import { ReactComponent as CloseSvg } from "../assets/close.asset.svg";
import { ReactComponent as MenuSvg } from "../assets/menu.asset.svg";
import { useScrollDirection } from "../hooks/useScrollDirection.hook";
import Link from "./link.component";
import Paragraph from "./paragraph.component";

function Header() {
  const scrollDirection = useScrollDirection();
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenuHandler = () => {
    setMobileMenu((prev) => !prev);
  };

  const onClickLiHandler = () => {
    mobileMenu && toggleMenuHandler();
  };

  const navLinks = [
    { value: "about" },
    { value: "work_expirience" },
    { value: "projects" },
  ];
  return (
    <header
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } transition-all duration-500 h-24 bg-inherit font-bold border-b-2 border-double px-7 py-5 left-0 right-0 flex justify-end`}
    >
      {mobileMenu && (
        <div
          onClick={toggleMenuHandler}
          className="h-screen touch-none backdrop-blur-lg absolute top-0 left-0 right-0 bottom-0"
        />
      )}
      {mobileMenu ? (
        <CloseSvg
          onClick={toggleMenuHandler}
          className={`hidden fill-secondary ${
            mobileMenu && "md:block"
          } h-12 w-12 right-5 z-20 ${
            scrollDirection === "down" ? "-top-24" : "top-5"
          }`}
        />
      ) : (
        <MenuSvg
          onClick={toggleMenuHandler}
          className={`hidden fill-secondary h-12 w-12 ${
            !mobileMenu && "md:block"
          } right-5 ${
            scrollDirection === "down" ? "-top-24" : "top-5"
          }`}
        />
      )}
      <ul
        className={`${
          mobileMenu ? "right-0" : "-right-full"
        } md:fixed md:w-8/12 md:h-full md:pl-10 md:border-double md:border-l-2 md:block top-0 transition-all duration-500 flex flex-wrap bg-inherit items-center touch-none`}
      >
        {navLinks.map(({ value }, index) => (
          <li
            onClick={onClickLiHandler}
            className="flex md:basis-full md:first:mt-20 md:mb-10 mr-10"
          >
            <Link
              target={"_self"}
              href={`/#${value}`}
              value={
                <Paragraph
                  className="border-b-2 border-secondary mb-0"
                  before={"> "}
                  value={value}
                />
              }
            />
          </li>
        ))}
        <Link
          href={
            "https://docs.google.com/document/d/1CSy-hGkmtTZg8hhc9oVHxXYsKtCIjrbWzcdoaZHjD5Q/edit?usp=share_link"
          }
          value={
            <button className="p-2 md:py-3 md:px-14 px-5 border-2 border-secondary hover:border-solid hover:text-secondary">
              resume
            </button>
          }
        />
      </ul>
    </header>
  );
}

export default Header;
