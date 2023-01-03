import styled from "styled-components";

export const Card = styled.article`
    width: 225px;
    height: 325px;
    border: 5px solid var(--tertiary-color);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    cursor: pointer;
`

export const Image = styled.img`
    width: 100%;
    pointer-events: none;
`

export const Name = styled.footer`
    width: 100%;
    padding: 17px 10px;
    border-top: 5px solid var(--tertiary-color);

    display: flex;
    justify-content: space-between;

    font-size: 2.4rem;
`