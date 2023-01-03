import styled from "styled-components";

export const Pokemon = styled.li`
    width: 50px;
    height: 50px;
    border: 5px solid transparent;
    
    display: flex;
    justify-content: center;
    align-items: center;

    &.activated {
        border: 5px solid var(--primary-color)
    }
`
export const Icon = styled.img`
    min-width: 100%;
    transform: scale(1.3);
`