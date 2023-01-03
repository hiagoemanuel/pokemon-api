import { useCallback, useContext, useEffect } from 'react'

import { ThemeContext } from '../../../contexts/themes'
import { themes } from '../../../constants/themes'
import images from '../../../constants/images'

import { pokemonsIconsList } from '../ThemeToggler'
import { pokemonIconHeader } from '../index'

import { Pokemon, Icon } from './style'

function PokemonsIcon() {
    const { setPokemonTheme } = useContext(ThemeContext)
    
    const changePokemonTheme = useCallback((index) => {
        const currentTheme = document.getElementsByClassName('activated')[0]

        if (currentTheme) currentTheme.classList.remove('activated')

        setPokemonTheme(themes.pokemonTheme[index])
        pokemonsIconsList.current.children[index].classList.add('activated')
        pokemonIconHeader.current.src = images.currentPokemon[index]
        localStorage.setItem('pokemonTheme', index)
    }, [setPokemonTheme])

    useEffect(() => {
        if (localStorage.getItem('pokemonTheme')) {
            changePokemonTheme(localStorage.getItem('pokemonTheme'))
        } else {
            localStorage.setItem('pokemonTheme', 4)
            changePokemonTheme(localStorage.getItem('pokemonTheme'))
        }
    }, [changePokemonTheme])

    return (
        <>
            {images.currentPokemon.map((pokemon, index) => (
                <Pokemon key={index} onClick={() => changePokemonTheme(index)}>
                    <Icon src={pokemon} alt='pokemon-theme' />
                </Pokemon>
            ))}
        </>
    )
}

export { PokemonsIcon }