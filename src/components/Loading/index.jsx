import images from '../../constants/images'
import { Container } from './style'

function Loading({ button }) {
    return (
        <Container className='loading' button={ button ? true : false}>
            <img src={images.pokeball} alt="loading" />
            <h1>Carregando...</h1>
        </Container>
    )
}

export { Loading }
