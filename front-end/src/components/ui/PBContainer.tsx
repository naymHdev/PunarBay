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
    <div className={`mx-auto px-4 ${className} md:px-4 lg:px-6 w-full max-w-${maxWidth}`}>
      {children}
    </div>
  );
}
