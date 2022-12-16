import './index.css'
import images from '../../constants/images'

function Footer() {
    return (
        <footer className='footer'>
            <div className="credits">
                <h3 className="credits__dev">
                    Desenvolvido por <a href='https://github.com/hiagoemanuel' target='_blank' rel='noreferrer'>{'<hiago emanuel>'}</a>
                </h3>
                <aside className="credits__social">
                    <ul className='social'>
                        <li className='social__menu'>
                            <a href="https://github.com/hiagoemanuel" target='_blank' rel='noreferrer'>
                                <img src={images.gitHubIcon} alt="git-hub-icon" />
                            </a>
                        </li>
                        <li className='social__menu'>
                            <a href="https://www.linkedin.com/in/hiago-emanuel-603610246/" target='_blank' rel='noreferrer'>
                                <img src={images.linkedinIcon} alt="linkedin-icon" />
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
        </footer>
    )
}

export { Footer }