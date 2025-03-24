import { ReactNode } from "react";
import { Button } from "./button";

interface IButtonProps {
  children: ReactNode;
  className?: string;
  type?: "button" | "reset" | "submit" | undefined;
}

const PBButton = ({
  children,
  type,
  className = "",
  ...props
}: IButtonProps) => {
  return (
    <Button
      type={type}
      className={`${className} bg-[#1575B9] hover:bg-[#1575B9] text-white hover:cursor-pointer`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PBButton;
