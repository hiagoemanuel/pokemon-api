import { toTop } from '../../services/toTop'

import images from '../../constants/images'
import './index.css'

window.addEventListener('scroll', () => toTop())

function ToTopButton() {
    return (
        <a className='to-top' href="#root" style={{ display: 'none' }}>
            <img src={images.arrowUpIcon} alt="to-top" />
        </a>
    )
}

export { ToTopButton }