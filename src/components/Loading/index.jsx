import images from '../../constants/images'
import { Container } from './style'

function Loading() {
    return (
        <Container>
            <img src={images.pokeball} alt="loading" />
            <h1>Carregando...</h1>
        </Container>
    )
}

export { Loading }
