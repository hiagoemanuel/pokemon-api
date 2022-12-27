import styled from 'styled-components'

export const ContainerTheme = styled.div`
    position: relative;
`

export const CollapseTheme = styled.div`
    width: 200px;
    height: 290px;
    padding: 15px;
    
    z-index: 1;
    position: absolute;
    top: 47px;
    right: -9px;
    background-color: yellow;
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