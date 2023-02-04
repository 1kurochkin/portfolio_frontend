import { useScrollDirection } from "../hooks/useScrollDirection.hook";
import Link from "./link.component";

function Header() {
  const scrollDirection = useScrollDirection();

  const navLinks = [
    { value: "about" },
    { value: "work_expirience" },
    { value: "projects" }
  ];
  return (
    <header
      className={`${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } transition-all duration-500 bg-inherit font-bold border-b-2 border-double px-2 py-5 flex items-center justify-end sticky top-0 left-0 right-0 text-lg`}
    >
      {navLinks.map(({ value }, index) => (
        <>
          {index !== 0 && <span className="mx-5">|</span>}
          <nav className="cursor-pointer border-b-2 border-secondary hover:text-secondary">
            <span className="text-secondary">{"> "}</span>
            <a href={`/#${value}`}>{value}</a>
          </nav>
        </>
      ))}
      <Link href={"https://docs.google.com/document/d/1CSy-hGkmtTZg8hhc9oVHxXYsKtCIjrbWzcdoaZHjD5Q/edit?usp=share_link"}
        value={
          <button className="ml-10 mr-5 p-2 px-5 border-2 border-secondary hover:border-solid hover:text-secondary">
            resume
          </button>
        }
      />
    </header>
  );
}

export default Header;
