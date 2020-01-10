import React from "react";
import { NavLink as Link } from "react-router-dom";

const items = [
  {
    text: "Home",
    link: "/"
  },
  {
    text: "About",
    link: "/about"
  },
  {
    text: "Modal workspace",
    link: "/modal"
  },
  {
    text: "Ripple Workspace",
    link: "/ripple"
  },
  {
    text: "Dropdown Workspace",
    link: "/dropdown"
  }
];

export const SideBar = props => {
  return (
    <nav
      className="navbar"
      style={{
        position: "fixed",
        height: "100vh",
        width: 200,
        background: "hsl(0, 0%, 96%)"
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch"
        }}
      >
        {items.map(item => (
          <li key={item.link} className="">
            <Link
              exact
              activeStyle={{ background: "#23d160", color: "white" }}
              style={{ padding: 20, display: "block" }}
              to={item.link}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
