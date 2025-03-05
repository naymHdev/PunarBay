import { ReactNode } from "react";
import { Button } from "./button";

interface IButtonProps {
  children: ReactNode;
  className?: string;
}

const PBButton = ({ children, className = "", ...props }: IButtonProps) => {
  return (
    <Button
      className={`${className} bg-[#1575B9] hover:bg-[#1575B9] text-white hover:cursor-pointer`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PBButton;
