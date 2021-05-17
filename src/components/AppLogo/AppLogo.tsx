import React from "react";
import logo from "./AppLogo.png";
import "./AppLogo.scss";

export const AppLogo: React.FC = () => {
  return (
    <span>
      <img className="app-logo" src={logo} alt="Logo"></img>
    </span>
  );
};
