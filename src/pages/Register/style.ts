import styled from "styled-components";

const RegisterStyle = styled.div`
background-color: #ffff;
width: 100vw;
height: 1300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

#logoebotaolinha{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 379px;
    margin-bottom: 30px;
    margin-top: 0px;
}

#trasRegister{
    background-color: #ffff;
    width: 429px;
    height: 680px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05), 0 4px 16px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
}
h1{
    color: #ea1d2c;
}

#botaoVoltar{
    width: 68px;
    height: 40px;
    background-color: #ea1d2c;
    color: white;
    cursor: pointer;
    border-radius: 6px;
}

select{
    width: 345px;
    height: 52px;
    background-color: #343B41;
    border: 1.2px solid #F8F9FA;
    border-radius: 4px;
    padding-left: 10px;
    color: red;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
    color: #F8F9FA;
}

#cadBut{
    margin-top: 5%;
    margin-bottom: 5%;
}

@media(max-width: 470px){
    select{
    width: 315px;
    height: 55px;
    }

    #logoebotaolinha{
    width: 300px;

}
}
`
export default RegisterStyle