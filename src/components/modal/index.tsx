import { Container } from "./style";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Authcontext";


interface ImodalProps{
  postRegisterTech: Function

}

const Modal = ({postRegisterTech}: ImodalProps) => {

  function onSubmit(data:{}){
    postRegisterTech(data)
  }


  const { register,handleSubmit } = useForm()
  const { abrirModal } = useContext(AuthContext);

  return (
    <Container>
      <div id="containerTudo">
        <div id="partedecima">
          <p>Cadastro Tecnologia</p>
          <button onClick={() => abrirModal(false)}>X</button>
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="tipoTech">Nome</label>
          <input type="text" id="title"  {...register("title")}/>

          <label htmlFor="tipoTech2">Selecionar Status</label>
          <select id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </Container>
  );
};

export default Modal;
