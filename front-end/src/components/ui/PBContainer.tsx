import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?:
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl";
}

export default function PBContainer({
  children,
  maxWidth = "xl",
  className
}: ContainerProps) {
  return (
    <div className={`mx-auto px-4 ${className} md:px-6 lg:px-8 w-11/12 max-w-${maxWidth}`}>
      {children}
    </div>
  );
}
