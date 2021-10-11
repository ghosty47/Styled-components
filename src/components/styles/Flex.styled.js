import styled from 'styled-components'


export const Flex = styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;


    & > div, //any direct div
    & > ul { //any direct ul
        flex: 1; // setting it to flex by 1
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
        text-align: center;
    }
`