import "./Button.css";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  parentMethod: () => void;
}

interface ButtonChildrenProps {
  children: ReactNode;
}

export const ChildrenButton = ( { children } : ButtonChildrenProps) => {
  return <div className="red-button">{children}</div>;
}

export function Button({ children, parentMethod }: ButtonProps) {
  return (
    <button className="custom-button" onClick={parentMethod}>
      {children}
    </button>
  );
}
