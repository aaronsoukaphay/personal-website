import { GiHamburgerMenu } from "react-icons/gi";
import "./AppDrawer.css";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function AppDrawer({ tabs, header }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 right-7 pt-7">
      <GiHamburgerMenu
        onClick={() => setIsOpen(!isOpen)}
        size={25}
        className="cursor-pointer"
      />
      <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <MenuBar
        isOpen={isOpen}
        tabs={tabs}
        header={header}
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
}

function MenuBar({ isOpen, tabs, header, onClick }) {
  const className = isOpen ? "menu-drawer is-open" : "menu-drawer hidden";
  return (
    <div className={className}>
      <div className="flex justify-end pe-5">
        <button onClick={onClick}>
          <IoMdClose style={{ color: "black" }} size={20} />
        </button>
      </div>
      <h3 className="menu-heading text-black">{header}</h3>
      <ul className="menu-items text-black">
        {tabs.map((tab, index: number) => (
          <a
            key={index}
            href={`#${tab.toLowerCase() === "home" ? "" : tab.toLowerCase()}`}
          >
            <li className="menu-item">{tab}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}

function Backdrop({ isOpen, onClick }) {
  const className = isOpen ? "menu-shade is-drawn" : "menu-shade";
  return <div className={className} onClick={onClick} />;
}
