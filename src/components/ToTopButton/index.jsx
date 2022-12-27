import { toTop } from './services/toTop'
import images from '../../constants/images'

import { Button } from './style'

window.addEventListener('scroll', () => toTop())

function ToTopButton() {
    return (
        <Button id="to-top" href="#root" style={{ display: 'none' }}>
            <img src={images.arrowUpIcon} alt="to-top" />
        </Button>
    )
}

export { ToTopButton }