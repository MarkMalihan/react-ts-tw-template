import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "light"
    | "dark"
    | "neumorphism-primary";
};

export const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  const buttonClasses = twMerge(
    clsx(
      "px-4 py-2 font-medium rounded transition-colors duration-300",
      {
        "bg-blue-500 text-white hover:bg-blue-600": variant === "primary",
        "bg-gray-300 text-black hover:bg-gray-400": variant === "secondary",
        "bg-accent text-black": variant === "accent",
        "bg-white text-black hover:bg-gray-100": variant === "light",
        "bg-black text-white hover:bg-gray-700": variant === "dark",
        "shadow-neumorphic-light": variant === "neumorphism-primary",
        "opacity-50 cursor-not-allowed": props.disabled,
      },
      className
    )
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
