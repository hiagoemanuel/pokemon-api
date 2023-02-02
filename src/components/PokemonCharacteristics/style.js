import styled from 'styled-components'

export const MainStyle = styled.main`
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 15px;

    position: relative;

    .to-home {
        padding: 5px 10px;
        border: 5px solid var(--tertiary-color);

        font-size: 4rem;
    }
    .to-home:hover { background-color: var(--tertiary-color); }
`

export const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
`

export const Card = styled.div`
    width: 300px;
    text-align: center;
    font-size: 2rem;

    img {
        width: 100%;
        pointer-events: none;
    }
    h1 { font-size: 6.4rem; }
`

export const ContainerContent = styled.section`
    margin-top: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`