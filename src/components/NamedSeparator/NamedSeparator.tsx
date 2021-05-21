import React from "react";
import "./NamedSeparator.scss";

/**
 * This component can be used as section separators with named titles to those sections.
 * @returns 
 */
export const NamedSeparator: React.FC<NamedSeparatorProps> = ({
  backgroundColor = "#6B206A",
  textColor = "#E5E5E5",
  title = "TestHeadline",
}: NamedSeparatorProps) => {
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
  /**
   * Pass in the title that needs to be displayed in the header
   */
  title: string;
  /**
   * The background-color of the header + border
   */
  backgroundColor?: string;
  /**
   * Header text color
   */
  textColor?: string;
};
