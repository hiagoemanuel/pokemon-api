import styled from 'styled-components'

export const Ability = styled.div`
    width: 590px;
    border: 5px solid yellow;
    padding: 0 35px;
`

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;

    h1 {
        border-bottom: 5px solid yellow;

        font-size: 7rem;
        text-align: center;
    }
`

export const AbilityDetails = styled.div`
    margin-top: 35px;
    padding-bottom: 35px;
    border-bottom: 5px solid black;
    
    &:last-child {
        border-bottom: none;
    }

    h2 {
        font-size: 6.4rem;
    }
    p {
        font-size: 3.6rem;
    }
`