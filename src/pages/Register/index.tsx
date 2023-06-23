import RegisterStyle from "./style";
import { Link } from "react-router-dom";
import FormStyle from "../../components/form/style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext, IFormRegister } from "../../contexts/Authcontext";



const schema = yup.object().shape({
  name: yup.string().required("Seu nome é obrigatório"),

  email: yup
    .string()
    .required("Seu email é obrigatório")
    .email("Precisa ser um email válido"),

  password: yup
    .string()
    .required("Sua senha é obrigatória")
    .matches(
      /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/,
      "Deve conter uma letra maiscúla, uma letra minúscula, 1 caracter especial, um número e no mínimo 6 caracteres "
    ),

  ConfirmarSenha: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não correspondem")
    .required("Confirmar sua senha é obrigatório"),

  bio: yup
    .string()
    .required("Sua bio é obrigatória")
    .min(10, "Mínimo 4 caracteres")
    .max(40, "Máximo 20 caracteres"),

});



const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>({ resolver: yupResolver(schema) });

  const { registerUser } = useContext(AuthContext);
  return (
    <RegisterStyle>
      <div id="logoebotaolinha">
      </div>
      <div id="trasRegister">
        <h1>Crie sua conta</h1>
        <FormStyle onSubmit={handleSubmit(registerUser)}>
          <label>
            Nome
            <input
              type="text"
              id="name"
              {...register("name")}
              placeholder={"Digite seu nome"}
            />
            <p className="pRegister"> {errors.name?.message} </p>
          </label>

          <label>
            Email
            <input
              type="text"
              id="email"
              {...register("email")}
              placeholder={"Digite seu email"}
            />
            <p className="pRegister"> {errors.email?.message}</p>
          </label>

          <label>
            Senha
            <input
              type="password"
              id="password"
              {...register("password")}
              placeholder={"Digite sua senha"}
            />
            <p className="pRegister"> {errors.password?.message}</p>
          </label>

          <label>
            Confirmar senha
            <input
              type="password"
              id="ConfirmarSenha"
              {...register("ConfirmarSenha")}
              placeholder={"Digite novamente sua senha"}
            />
            <p className="pRegister"> {errors.ConfirmarSenha?.message} </p>
          </label>

          <label>
            Contato
            <input
              type="text"
              id="contact"
              {...register("contact")}
              placeholder={"Opção de contato"}
            />
            <p className="pRegister"> {errors.contact?.message}</p>
          </label>
          <button type="submit" id="cadBut">Cadastrar-se</button>
        </FormStyle>
      </div>
      <ToastContainer />
    </RegisterStyle>
  );
};

export default Register;
