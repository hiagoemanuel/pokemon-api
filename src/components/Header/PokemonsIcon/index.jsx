import images from '../../../constants/images'

import { Pokemon, Icon } from './style'


function PokemonsIcon() {
    return (
        <>
            {images.currentPokemon.map((pokemon, index) => (
                <Pokemon key={index}>
                    <Icon src={pokemon} alt='pokemon-theme' />
                </Pokemon>
            ))}
        </>
    )
}

export { PokemonsIcon }