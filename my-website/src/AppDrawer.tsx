import { GiHamburgerMenu } from "react-icons/gi";
import "./AppDrawer.css";
import { useState } from "react";

export default function AppDrawer({ tabs, header }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} />
      <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <MenuBar isOpen={isOpen} tabs={tabs} header={header} />
    </>
  );
}

function MenuBar({ isOpen, tabs, header }) {
  const className = isOpen ? "menu-drawer is-open" : "menu-drawer hidden";
  return (
    <div className={className}>
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
