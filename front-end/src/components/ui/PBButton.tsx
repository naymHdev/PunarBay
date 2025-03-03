import { ReactNode } from "react";
import { Button } from "./button";

interface IButtonProps {
  children: ReactNode;
  className?: string;
}

const PBButton = ({ children, className = "", ...props }: IButtonProps) => {
  return (
    <Button
      className={`${className} bg-blue-500 hover:bg-blue-600 text-white`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PBButton;
