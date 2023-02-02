import { GitHubIcon, LinkdinIcon } from '../../constants/vectors'
import { Credits, FooterStyle, SocialMedias, FooterResponsive, Social } from './style'

function Footer() {
    return (
        <FooterStyle>
            <FooterResponsive />
            <Credits>
                <h3 className="credits__dev">
                    Desenvolvido por <a href='https://github.com/hiagoemanuel' target='_blank' rel='noreferrer'>{'<hiago emanuel>'}</a>
                </h3>
                <SocialMedias>
                    <Social>
                        <a href="https://github.com/hiagoemanuel" target='_blank' rel='noreferrer'>
                            <GitHubIcon />
                        </a>
                    </Social>
                    <Social>
                        <a href="https://www.linkedin.com/in/hiago-emanuel-603610246/" target='_blank' rel='noreferrer'>
                            <LinkdinIcon />
                        </a>
                    </Social>
                </SocialMedias>
            </Credits>
        </FooterStyle>
    )
}

export { Footer }