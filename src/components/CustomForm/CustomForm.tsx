import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import InputForm from "./components/InputForm";
import "./CustomForm.css";
import { schema, type FormValues } from "./schemas";

const CustomForm = () => {
  // En este ejemplo no queremos tener multiples states para cada campo del formulario,
  // control: es un objeto que permite registrar los campos del formulario y manejar su estado de manera centralizada.
  // handleSubmit: es una función que se utiliza para manejar el envío del formulario, validando los datos antes de pasarlos a la función de envío.
  // formState: es un objeto que contiene información sobre el estado actual del formulario, incluyendo los errores de validación.
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data Submitted: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {
        // Composition Pattern: Usamos el componente CustomInput para cada campo
        //del formulario, pasando las props necesarias como name, control, label y
        //error.
      }
      <InputForm
        name="name"
        control={control}
        label="Name"
        error={errors.name}
        type="text"
      />
      <InputForm
        name="email"
        control={control}
        label="Email"
        error={errors.email}
        type="email"
      />
      <InputForm
        name="password"
        control={control}
        label="Password"
        error={errors.password}
        type="password"
      />
      <InputForm
        name="confirmPassword"
        control={control}
        label="Confirm Password"
        error={errors.confirmPassword}
        type="password"
      />
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CustomForm;
