import { CardsProvider } from '../../contexts/pokemons-card'

import { ToTopButton } from '../ToTopButton'
import { PokemonCardsList } from './PokemonCardsList'
import { ButtonLoadMore } from './ButtonLoadMore'

import { Cards, MainStyle, Phrase, Title } from './style'

function PokemonList() {
    return (
        <MainStyle>
            <Phrase>Saiba mais sobre os movimentos e habilidades dos pokémons aqui ;D</Phrase>
            <Title>Pokémons</Title>
            <CardsProvider>
                <Cards>
                    <PokemonCardsList />
                </Cards>
                <ButtonLoadMore />
            </CardsProvider>
            <ToTopButton />
        </MainStyle>
    )
}

export { PokemonList }