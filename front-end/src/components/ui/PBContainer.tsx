import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
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
}: ContainerProps) {
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 max-w-${maxWidth}`}>
      {children}
    </div>
  );
}
