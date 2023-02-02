import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { PokemonCharacteristics } from '../components/PokemonCharacteristics'

function PokemonDetails() {
    return (
        <>
            <Header notFilter />
            <PokemonCharacteristics />
            <Footer />
        </>
    )
}

export { PokemonDetails }