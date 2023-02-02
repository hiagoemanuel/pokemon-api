import styled from 'styled-components'

export const ContainerFilter = styled.div`
    .icon.active ~ .acordeon-content {
        display: block;
    }
`

export const AcordeonContent = styled.div`
    width: 250px;
    height: 200px;
    padding: 0 5px;

    display: none;
    position: absolute;
    z-index: 1;
    top: 70px;
    right: 0px;
    
    background-color: var(--tertiary-color);
`

export const ContainerTypes = styled.div`
    width: 100%;
    margin-top: 5px;

    display: flex;
    flex-wrap: wrap;
    gap: 5px;

    button {
        width: 75px;
        height: 20px;
        border: 1px solid var(--primary-color);

        font-size: 2rem;
        text-align: center;
        
        background-color: transparent;
        font-family: var(--primary-font);
        color: var(--primary-color);

        cursor: pointer;

        &.selected-type {
            background-color: var(--primary-color);
            color: var(--tertiary-color);
        }
    }
`