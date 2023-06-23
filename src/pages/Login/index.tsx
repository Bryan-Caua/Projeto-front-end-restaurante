import LoginStyle from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormStyle from "../../components/form/style";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext, IUserLogin } from "../../contexts/Authcontext";

const schema = yup.object().shape({
  email: yup.string().required("E-mail Obrigatório").email("E-mail Inválido"),
  password: yup.string().required("O campo senha é obrigatório"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({ resolver: yupResolver(schema) });

  const { loginUser } = useContext(AuthContext);

  return (
    <>
      <LoginStyle>
        <div id="div1Login">
          <h2>Logo logo você faz seu pedido, é rapidinho!</h2>
          <FormStyle onSubmit={handleSubmit(loginUser)}>
            <label>
              Email
              <input
                type="text"
                id="email"
                {...register("email")}
                placeholder={"Digite seu e-mail"}
              />
              <p id="p1login"> {errors.email?.message} </p>
            </label>

            <label>
              Senha
              <input
                type="password"
                id="password"
                {...register("password")}
                placeholder={"Digite sua senha"}
              />
              <p id="p2login"> {errors.password?.message} </p>
            </label>

            <button type="submit">Entrar</button>
          </FormStyle>
          <div>
            <p id="p3login">Ainda não possui uma conta?</p>
            <Link to="/register">
              <button id="botaoLink">Cadastre-se</button>
            </Link>
          </div>
        </div>
        <ToastContainer />
      </LoginStyle>
    </>
  );
};

export default Login;
