import styled from "styled-components";

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 330px;
    height: 48px;
    background-color: #ffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-left: 20px;
    color: black;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
    caret-color: black;
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1.875rem white inset;
      box-shadow: 0 0 0 1.875rem white inset;
    }
  }

  button {
    width: 343px;
    height: 48px;
    background-color: #ea1d2c;
    color: white;
    border: none;
    font-size: 20px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 5%;
  }

  label {
    font-size: 12px;
    color: black;
    margin-top: 2%;
  }

  @media (max-width: 470px) {
    input {
      width: 300px;
      height: 48px;
    }

    button {
      width: 90%;
    }
  }
`;

export default FormStyle;
