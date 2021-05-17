import React from "react";
import "./NamedSeparator.scss";

export const NamedSeparator: React.FC<NamedSeparatorProps> = ({
  backgroundColor = "#6B206A",
  textColor = "#E5E5E5",
  title = "TestHeadline",
}) => {
  return (
    <div>
      <div style={{}} className="named-separator-header">
        <div style={{ color: textColor, backgroundColor }}>
          <p>{title}</p>
        </div>
      </div>
      <div className="named-separator-border" style={{backgroundColor}}></div>
    </div>
  );
};

type NamedSeparatorProps = {
  title: string;
  backgroundColor: string;
  textColor: string;
};
