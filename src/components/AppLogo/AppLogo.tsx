import React from "react";
import logo from "./AppLogo.png";
import "./AppLogo.scss";

export const AppLogo: React.FC = () => {
  return (
    <span>
      <img id="app-logo" src={logo} alt="Logo"></img>
    </span>
  );
};
