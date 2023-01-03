import styled from 'styled-components'

export const Container = styled.div`
    margin: 40px 0px;
    display: flex;
    justify-content: center;
`

export const Button = styled.div`
    padding: 15px 40px;
    border: 5px solid var(--tertiary-color);

    outline: none;
    cursor: pointer;
    background-color: transparent;

    font-size: 2.4rem;

    &:hover {
    background-color: var(--tertiary-color);
    }
`