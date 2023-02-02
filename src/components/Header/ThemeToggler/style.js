import styled from 'styled-components'

export const ContainerTheme = styled.div`
    .icon.active ~ .acordeon-content { display: block; }
`

export const AcordeonContent = styled.div`
    width: 200px;
    height: 290px;
    padding: 15px;
    
    display: none;
    z-index: 1;
    position: absolute;
    top: 70px;
    right: 0px;

    background-color: var(--tertiary-color);

    li { cursor: pointer; }
`