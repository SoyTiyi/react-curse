import { Controller, type Control, type FieldError } from "react-hook-form";
import "./InputForm.css";
import { type FormValues } from "../schemas/form.model";

interface Props {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  type?: string;
  error?: FieldError;
}

const InputForm = ({
  name,
  control,
  label,
  type,
  error,
}: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}:</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div>
            <input
              id={name}
              type={type}
              className={`form-control ${error ? "is-invalid" : ""}`}
              {...field}
            />
          </div>
        )}
      />
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};

export default InputForm;