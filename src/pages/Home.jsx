import { Header } from '../components/Header'
import { PokemonsGrid } from '../components/PokemonsGrid'
import { Footer } from '../components/Footer'

function Home() {
    return (
        <>
        <Header />
        <PokemonsGrid />
        <Footer />
        </>
    )
}

export { Home }