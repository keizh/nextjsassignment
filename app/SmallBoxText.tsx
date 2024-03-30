import React from "react";

// Define types for props
interface SmallBoxTextProps {
  text: string;
}

// Define SmallBoxHeader component
const SmallBoxText: React.FC<SmallBoxTextProps> = ({ text }) => {
  return <p className="dark:text-[#ffffff] text-sm font-medium">{text}</p>;
};

export default SmallBoxText;
