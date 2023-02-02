import styled from 'styled-components'

export const Button = styled.a`
    width: 100px;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 80px;
    right: 40px;

    cursor: pointer;
    opacity: 50%;
    background-color: var(--tertiary-color);

    &:hover { opacity: 100%; }

    @media (max-width: 490px) {
        width: 50px;
        height: 50px;
        padding: 10px;

        bottom: 110px;
    }
`