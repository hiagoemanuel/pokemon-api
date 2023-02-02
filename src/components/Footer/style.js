import styled, { createGlobalStyle } from 'styled-components'

export const FooterStyle = styled.footer`
    max-width: 100%;
    height: 70px;

    background-color: var(--tertiary-color);
    color: var(--primary-color);
`

export const Credits = styled.div`
    max-width: var(--max-width);
    height: 100%;
    margin: 0 auto;
    padding: 0px 10px;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    .credits__dev { font-size: 1.9rem; }
`

export const SocialMedias = styled.ul`
    position: absolute;
    right: 10px;

    display: flex;
    align-items: center;
    gap: 20px;
`
export const Social = styled.li``

export const FooterResponsive = createGlobalStyle`
    @media (max-width: 485px) {
        ${FooterStyle} {
            height: auto;
        }
        ${Credits} {
            flex-direction: column;
            gap: 20px;
            padding: 10px;
    
            .credits__dev { font-size: 1.7rem; }
        }
        ${SocialMedias} {
            position: relative;
            right: 10px;
        }
    }
`