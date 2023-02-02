import { useCallback, useContext, useEffect, useRef } from 'react'
import { dataPersistence } from '../../../../services/dataPersistence'
import { themes } from '../../../../constants/themes'
import images from '../../../../constants/images'
import { ThemeContext } from '../../../../contexts/themes'
import { chosenPokemon } from '../../index'
import { Theme, Pokemon, Icon } from './style'

function PokemonTheme() {
    const list = useRef()
    const { setPokemonTheme } = useContext(ThemeContext)
    
    const changePokemonTheme = useCallback((index) => {
        const currentTheme = document.getElementsByClassName('activated')[0]

        if (currentTheme) currentTheme.classList.remove('activated')

        setPokemonTheme(themes.pokemonTheme[index])
        list.current.children[index].classList.add('activated')
        chosenPokemon.current.src = images.currentPokemon[index]
        localStorage.setItem('pokemonTheme', index)
    }, [setPokemonTheme])

    useEffect(() => dataPersistence('pokemonTheme', 4, changePokemonTheme), [changePokemonTheme])

    return (
        <Theme ref={list}>
            {images.currentPokemon.map((pokemon, index) => (
                <Pokemon key={index} onClick={() => changePokemonTheme(index)}>
                    <Icon src={pokemon} alt='pokemon-theme' />
                </Pokemon>
            ))}
        </Theme>
    )
}

export { PokemonTheme }