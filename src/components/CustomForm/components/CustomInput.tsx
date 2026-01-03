import { Controller, type Control, type FieldError } from "react-hook-form";

interface Props {
  name: string;
  control: Control<any>;
  label: string;
  type?: string;
  error?: FieldError;
}

const CustomInput = ({
  name,
  control,
  label,
  type = "text",
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

export default CustomInput;