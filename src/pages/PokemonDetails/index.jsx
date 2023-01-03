import { Header } from '../../components/Header/'
import { Footer } from '../../components/Footer/'
import { MovesAndAbilities } from '../../components/MovesAndAbilities'

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