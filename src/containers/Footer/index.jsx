import images from '../../constants/images'

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
                            <img src={images.gitHubIcon} alt="git-hub-icon" />
                        </a>
                    </Social>
                    <Social>
                        <a href="https://www.linkedin.com/in/hiago-emanuel-603610246/" target='_blank' rel='noreferrer'>
                            <img src={images.linkedinIcon} alt="linkedin-icon" />
                        </a>
                    </Social>
                </SocialMedias>
            </Credits>
        </FooterStyle>
    )
}

export { Footer }