import { Header } from '../../containers/Header/'
import { Footer } from '../../containers/Footer/'
import { MovesAndAbilities } from '../../containers/MovesAndAbilities'

function PokemonDetails() {
    return (
        <>
            <Header notFilter />
            <MovesAndAbilities />
            <Footer />
        </>
    )
}

export { PokemonDetails }