import { IoChevronDown } from "react-icons/io5";

const Select = ({ children, variant = "primary", ...rest }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "border-primaryBlue text-primaryBlue";
      default:
        return "border-gray-300 text-gray-700";
    }
  };

  const baseStyles = "font-medium border-2 rounded-xl p-2";

  return (
    <select className={`${baseStyles} ${getVariantStyles()}`} {...rest}>
      {children} <IoChevronDown />
    </select>
  );
};

export default Select;
