import styled from 'styled-components'

export const ContainerTheme = styled.div`
    position: relative;

    .icon.active ~ .acordeon-content {
        display: block;
    }
`

export const AcordeonContent = styled.div`
    width: 200px;
    height: 290px;
    padding: 15px;
    
    display: none;
    z-index: 1;
    position: absolute;
    top: 47px;
    right: -9.8px;
    background-color: var(--tertiary-color);

    li {
        cursor: pointer;
    }
`

export const MainTheme = styled.ul`
    display: flex;
    gap: 20px;

    li {
        padding: 12px;
        border: 5px solid transparent;
    }
`

export const PokemonTheme = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`