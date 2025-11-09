import React from "react";

interface ButtonProps {
  hasAccess: boolean;
  isSubscribed: boolean;
  onToggle: () => void;
}

const Button: React.FC<ButtonProps> = ({ hasAccess, isSubscribed, onToggle }) => {
  const label = hasAccess
    ? isSubscribed
      ? "Se désinscrire"
      : "S'inscrire"
    : "S'abonner";

  const classes = [
    "max-w-[130px] w-full font-bold rounded-full px-5 py-2.5 text-sm focus:outline-none focus:ring-4 transition-colors",
    hasAccess
      ? "bg-red text-white hover:bg-red-800 focus:ring-red-300"
      : "bg-yellow text-black focus:ring-yellow-300",
    isSubscribed ? "!bg-black text-white" : "",
  ].filter(Boolean).join(" ");
  
  return (
    <button
      type="button"
      className={classes}
      disabled={!hasAccess}
      onClick={hasAccess ? onToggle : undefined}
    >
      {label}
    </button>
  );
};

export default Button;
