import styled from 'styled-components';

export const DashboardStyle = styled.div`

#cartInCollumn{
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: space-between;
}


@media(max-width: 1220px){

    #cartPriceInColumn{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #cartInCollumn{
        display: flex;
        flex-direction: column;
        max-height: 400px;
    }


}
`