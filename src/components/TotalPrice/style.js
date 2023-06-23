import styled from 'styled-components';

export const TotalPriceStyle = styled.div`
display: flex;
flex-direction: column;
width: 365px;
min-height: 75px;
background-color: #F5F5F5;
border-top: solid 2px #E0E0E0;
border-radius: 0px 0px 8px 8px;

div{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

button{
    width: 343px;
    height: 60px;
    border: none;
    cursor: pointer;
    background-color: #E0E0E0;
    border-radius: 8px;
    margin-bottom: 20px;
}

button:hover{
    color: red;
}

@media(max-width: 1220px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}



`