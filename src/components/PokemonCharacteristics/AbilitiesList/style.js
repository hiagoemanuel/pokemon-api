import styled from 'styled-components'

export const Ability = styled.div`
    max-width: 590px;
    border: 5px solid var(--tertiary-color);
    padding: 0 35px;

`

export const AbilityDetails = styled.div`
    margin-top: 35px;
    padding-bottom: 35px;
    border-bottom: 5px solid var(--primary-color);
    
    &:last-child {
        border-bottom: none;
    }

    h2 { font-size: 6.4rem; }
    p { font-size: 3.6rem; }
    @media (max-width: 400px) {
        h2 { font-size: 4.2rem; }
        p { font-size: 2.6rem; }
    }
`