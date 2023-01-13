export const Button = ({ text, textColor, bgColor, handleClick }) => {
  return (
    <button
      className={`${bgColor} text-${textColor} uppercase px-4 py-2 rounded-md tracking-widest md:max-w-sm`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  textColor: "white",
  bgColor: "bg-emerald-300",
};

export default Button;
