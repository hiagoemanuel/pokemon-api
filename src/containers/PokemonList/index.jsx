import { CardsProvider } from '../../contexts/context-cards-list'

import { PokemonCardsList } from '../../components/PokemonCardsList'
import { ButtonLoadMore } from '../../components/ButtonLoadMore'
import { ToTopButton } from '../../components/ToTopButton'

import './index.css'

function PokemonList() {
    return (
        <main>
            <h2 className="generic-phrase">Saiba mais sobre os movimentos e habilidades dos pokémons aqui ;D</h2>
            <h1 className='cards__title'>Pokémons</h1>
            <CardsProvider>
                <div className='cards'>
                    <PokemonCardsList />
                </div>
                <ButtonLoadMore />
            </CardsProvider>
            <ToTopButton />
        </main>
    )
}

export { PokemonList }