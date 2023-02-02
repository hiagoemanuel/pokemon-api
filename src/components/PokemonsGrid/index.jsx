import { ToTopButton } from '../ToTopButton'
import { PokemonCardsList } from './PokemonCardsList'
import { ButtonLoadMore } from './ButtonLoadMore'
import { Cards, MainStyle, Phrase, Title } from './style'

function PokemonsGrid() {
    return (
        <MainStyle>
            <Phrase>Saiba mais sobre os movimentos e habilidades dos pokémons aqui ;D</Phrase>
            <Title>Pokémons</Title>
            <Cards>
                <PokemonCardsList />
            </Cards>
            <ButtonLoadMore />
            <ToTopButton />
        </MainStyle>
    )
}

export { PokemonsGrid }