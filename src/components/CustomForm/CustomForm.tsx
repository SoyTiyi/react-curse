import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import CustomInput from "./components/CustomInput";

const schema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email address").min(1, "Email is required"),
    password: z.string().min(5, "Password must be at least 5 characters long"),
    confirmPassword: z
      .string()
      .min(5, "Confirm Password must be at least 5 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

//Aca se acaba de generar un tipado de TypeScript a partir del esquema de validación definido con Zod.
type FormValues = z.infer<typeof schema>;

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
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data Submitted: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      // Composition Pattern: Usamos el componente CustomInput para cada campo
      del formulario, pasando las props necesarias como name, control, label y
      error.
      <CustomInput
        name="name"
        control={control}
        label="Name"
        error={errors.name}
      />
      <CustomInput
        name="email"
        control={control}
        label="Email"
        error={errors.email}
      />
      <CustomInput
        name="password"
        control={control}
        label="Password"
        error={errors.password}
      />
      <CustomInput
        name="confirmPassword"
        control={control}
        label="Confirm Password"
        error={errors.confirmPassword}
      />
    </form>
  );
};
