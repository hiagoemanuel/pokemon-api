import { ArrowUpIcon } from '../../constants/vectors'
import { toTop } from '../../services/showToTopButton'
import { Button } from './style'

window.addEventListener('scroll', () => toTop())

function ToTopButton() {
    return (
        <Button id="to-top" href="#root" style={{ display: 'none' }}>
            <ArrowUpIcon />
        </Button>
    )
}

export { ToTopButton }