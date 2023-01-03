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
    padding: 5px;

    display: none;
    position: absolute;
    top: 48.5px;
    right: -54.8px;
    
    background-color: var(--tertiary-color);
`
