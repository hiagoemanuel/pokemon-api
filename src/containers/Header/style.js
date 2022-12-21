import styled from 'styled-components'

export const HeaderStyle = styled.header`
    width: 100%;
    height: 70px;
    background-color: yellow;
`
export const Container = styled.div`
    max-width: var(--max-width);
    height: 100%;
    margin: 0 auto;
    padding: 0 10px;

    display: flex;
    justify-content: space-between;
    align-items: center ;
`
export const Logo = styled.div`
    display: flex;
    align-items: center;

    .logo__img {
        width: 100px
    }
    .logo__current-pokemon {
        width: 80px;
    }
`
export const Menu = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const MenuItem = styled.li`
    img {
        width: 25px;
        cursor: pointer;

        &:hover {
            transform: scale(1.2);
        }
    }
`