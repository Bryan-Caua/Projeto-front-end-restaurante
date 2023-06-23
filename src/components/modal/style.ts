import styled from "styled-components";

export const Container = styled.div`
display: block;

#containerTudo{
    width: 369px;
    height: 342px;
    background-color: red;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    background-color: #212529;
    flex-direction: column;
    border-radius: 0px 0px 4px 4px;
}


#partedecima{
    background-color: aqua;
    display: flex;
    flex-direction: row;
    background-color: #343B41;
    justify-content: space-between;
    border-radius: 4px 4px 0px 0px;
    margin-bottom: 4%;
    
    p{
        font-size: 20px;
        margin-left: 5%;
    }

    button{
        background-color:  #343B41;
        color: #868E96;
        border: none;
        font-size: 20px;
        margin-right: 5%;
        cursor: pointer;
    }
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    input{
        width: 90%;
        height: 15%;
            background-color: #343B41;
            color: #F8F9FA;
            border: none;
            border-radius: 4px;
            margin-bottom: 7%;
            font-size: 15px;
        }

        select{
            width: 90%;
            height: 18%;
            background-color: #343B41;
            color: #F8F9FA;
            border: none;
            border-radius: 4px;
            font-size: 15px;
        }
        button{
            background-color: #FF577F;
            color: white;
            border: none;
            border-radius: 4px;
            width: 90%;
            height: 18%;
            margin-top: 7%;
            cursor: pointer;
        }
        label{
            width: 90%;
            display: flex;
            align-items: flex-start;
            margin-bottom: 1%;
        }
    }
`
