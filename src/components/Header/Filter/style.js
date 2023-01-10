import styled from 'styled-components'

export const ContainerFilter = styled.div`
    position: relative;

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
    top: 48.5px;
    right: -54.8px;
    
    background-color: var(--tertiary-color);
`

export const ContainerTypes = styled.div`
    width: 100%;
    margin-top: 5px;

    display: flex;
    flex-wrap: wrap;
    gap: 5px;

    input {
        width: 75px;
        height: 20px;
        border: 1px solid var(--primary-color);

        background-color: transparent;
        outline: none;
        cursor: pointer;

        font-family: 'Overpass', sans-serif;
        font-family: 'VT323', monospace;
        font-size: 2rem;
        color: var(--primary-color);

        &.selected-type {
            background-color: var(--primary-color);
            color: var(--tertiary-color);
        }
    }
`