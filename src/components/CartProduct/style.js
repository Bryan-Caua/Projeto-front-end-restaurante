import styled from "styled-components";

export const CartProductStyled = styled.div`
display: flex;
flex-direction: row;
width: 343;
height: 80px;
justify-content: space-between;
align-items: center;

    img{
        width: 70px;
        height: 70px;
        background-color: #E0E0E0;
        margin-left: 2%;
        border-radius: 8px;
    }

    div{
        margin-bottom: 0%;
        margin-right: 80px;
        max-width: 20px;
    }

    #cartProductP1{
        font-size: 14px;
        color: #333333;
    }

    
    #cartProductP2{
        font-size: 12px;
        color: #828282;
    }


    button{
        cursor: pointer;
        border: none;
        max-height: 100%;
        background-color: #F5F5F5;
        font-size: 12px;
        color: #BDBDBD;
        margin-bottom: 10%;
        margin-right: 20%;
    }

    button:hover{
        color: red;
    }
`