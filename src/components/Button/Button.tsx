import "./Button.css";

interface ButtonProps {
  label: string;
  parentMethod: () => void;
}

export function Button({ label, parentMethod }: ButtonProps) {
  return (
    <button className="custom-button" onClick={parentMethod}>
      {label}
    </button>
  );
}
