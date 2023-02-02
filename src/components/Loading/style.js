import styled from 'styled-components'

export const Container = styled.div`
    height: calc(100vh - 140px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    font-size: 1.6rem;

    img { width: 60px; }

    ${({ button }) => {
        if (button) {
            return `
                height: auto;
                img {
                    width: 18px;
                    scale: 2;
                }
                h1 { font-size: 2.4rem; }
            `
        }
    }}
`