import styled from 'styled-components'

export const Moves = styled.div`
    width: 100%;
    border: 5px solid var(--tertiary-color);
`

export const ContainerContent = styled.ul`
    margin: 35px 0;

    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 260px);
    grid-gap: 20px;
    
    li {
        font-size: 4.2rem;
        @media (max-width: 340px) { text-align: center; }
    }
`