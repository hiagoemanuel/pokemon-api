import styled from 'styled-components'

export const MainTitle = styled.div`
    display: flex;
    justify-content: center;

    h1 {
        border-bottom: 5px solid var(--tertiary-color);

        font-size: 7rem;
        text-align: center;
    }
    @media(max-width: 400px) { h1 { font-size: 4.5rem; } }

`

export const SmallTitle = styled.h5`
    font-size: 2rem;
    margin: 5px 0pc 15px 0px;
`

export const Line = styled.span`
    width: 100%;
    height: 5px;
    margin-top: 15px;
    
    display: block;
    
    background-color: var(--primary-color);
`