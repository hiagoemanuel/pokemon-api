import styled from 'styled-components'

export const MainStyle = styled.main`
    max-width: var(--max-width);
    min-height: calc(100vh - 140px);
    margin: 0 auto;
    padding: 0 10px;
    position: relative;
`

export const Phrase = styled.span`
    display: block;
    margin-bottom: 40px;

    text-align: center;
    font-size: 2.4rem;
`

export const Title = styled.h1`
    font-size: 6.4rem;
    margin-bottom: 25px;
`

export const Cards = styled.div`
    max-width: 1205px;
    margin: 0 auto;

    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, 225px);
    justify-content: center;
`
