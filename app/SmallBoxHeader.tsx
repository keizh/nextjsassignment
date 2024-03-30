// Define types for props
interface SmallBoxHeaderProps {
  text: string;
}

// Define SmallBoxHeader component
const SmallBoxHeader: React.FC<SmallBoxHeaderProps> = ({ text }) => {
  return <p className="dark:text-[#DFDFDF] text-xs">{text}</p>;
};

export default SmallBoxHeader;
