import styled from "styled-components";

const LoginStyle = styled.div`
  background-color: #ffff;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  #div1Login {
    background-color: #ffff;
    width: 429px;
    height: 560px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border-color: #868e96;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05), 0 4px 16px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
  }

  img {
    margin-bottom: 10%;
  }

  h2 {
    font-size: 20px;
    color: #ea1d2c;
    text-align: center;
    max-width: 250px;
  }

  #botaoLink {
    width: 343px;
    height: 48px;
    background-color: #868e96;
    color: white;
    border: none;
    font-size: 20px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 5%;
    margin-bottom: 5%;
  }

  #p1login {
    min-height: 17px;
  }

  #p2login {
    min-height: 17px;
  }

  #p3login {
    font-size: 12px;
    color: #868e96;
    text-align: center;
  }

  @media (max-width: 470px) {
    #div1Login {
      background-color: #212529;
      width: 85%;
      height: 510px;
    }

    button:nth-child(2) {
      width: 290px;
    }
  }

  @media (max-width: 400px) {
    #div1Login {
      background-color: #212529;
      height: 510px;
      width: 100vw;
    }

    button:nth-child(2) {
      width: 290px;
    }

    #botaoLink {
      max-width: 285px;
      height: 48px;
    }
  }
`;

export default LoginStyle;
