import { Header } from '../../containers/Header'
import { PokemonList } from '../../containers/PokemonList'
import { Footer } from '../../containers/Footer'

function Home() {
    return (
        <>
        <Header />
        <PokemonList />
        <Footer />
        </>
    )
}

export { Home }