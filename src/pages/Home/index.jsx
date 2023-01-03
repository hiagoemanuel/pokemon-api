import { Header } from '../../components/Header'
import { PokemonList } from '../../components/PokemonList'
import { Footer } from '../../components/Footer'

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