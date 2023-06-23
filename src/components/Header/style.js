import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100vw;
  height: 80px;
  background-color: #f5f5f5;

  div {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 90%;
    margin-left: 5%;
  }

  input {
    background-color: white;
    border: solid 2px #e0e0e0;
    width: 265px;
    height: 50px;
    border-radius: 8px;
    font-size: 20px;
    padding-left: 20px;
  }

  button {
    margin-left: 20px;
    height: 50px;
    width: 110px;
    border: none;
    color: white;
    border-radius: 8px;
    background-color:  #ea1d2c;
    font-size: 20px;
    cursor: pointer;
    border: solid 2px #ea1d2c;
  }

  img {
    height: 45%;
    margin-left: 2%;
  }

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 670px) {
    width: 100%;
    height: 7rem;
    div {
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      width: 90%;
      margin-left: 5%;
    }
    img {
      max-width: 200px;
      max-height: 35%;
      margin-top: 2%;
      margin-bottom: 0px;
    }
    input {
      width: 165px;
      height: 40px;
      margin-bottom: 4%;
    }
    button {
      width: 65px;
      height: 40px;
      font-size: 12px;
      margin-bottom: 4%;
    }
  }
`;
