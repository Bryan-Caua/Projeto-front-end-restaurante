import styled from 'styled-components'

export const ProductStyled = styled.div`
width: 100vw;
height: 100rem;

ul{
    display: flex;
    flex-direction: row;
    margin-left: 5%;
    max-width: 100%;
    flex-wrap: wrap;
}

li{
    min-width: 28%;
    max-width: 28%;
    height: 346px;
    border: solid 2px #E0E0E0;
    list-style: none;
    border-radius: 8px;
    margin-right: 3%;
    margin-top: 2%;
}

.img{
    background: #F5F5F5;
    max-height: 40%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px 8px 0px 0px;
}


.textCard{
    margin-left: 10%;
}

#title{
    font-size: 20px;
    color: #333333;
}

#category{
    font-size: 12px;
    color: #828282;
}

#price{
    font: 14px;
    color: #27AE60;
}

button{
    width: 106px;
    height: 40px;
    background-color: #ea1d2c;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;

}

@media(max-width: 1220px){

li{
    min-width: 25%;
}

}

@media(max-width: 670px){

    ul{
        flex-wrap: nowrap;
        flex-direction: row;
        overflow-x: scroll;
    }

li{
    min-width: 65%;
}

}
`