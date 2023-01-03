import { useCallback, useContext, useEffect, useRef } from 'react'

import images from '../../../constants/images'
import { ThemeContext } from '../../../contexts/themes'

import { PokemonsIcon } from '../PokemonsIcon'
import { DarkModeIcon, LightModeIcon } from '../../../constants/vectors'

import { AcordeonContent, ContainerTheme, MainTheme, PokemonTheme } from './style'
import { Line, SmallTitle } from '../../../styles/components-style'
import { themes } from '../../../constants/themes'

function ThemeToggler() {
    const dark = useRef()
    const light = useRef()
    const { setMainTheme } = useContext(ThemeContext)

    const changeMainTheme = useCallback((ref) => {
        const reference = ref.current ? ref.current.id : ref

        switch (reference) {
            case 'dark':
                setMainTheme(themes.mainTheme.darkMode)
                localStorage.setItem('mainTheme', 'dark')
                dark.current.style.border = '5px solid var(--primary-color)'
                light.current.style.border = '5px solid transparent'
                break
            case 'light':
                setMainTheme(themes.mainTheme.lightMode)
                localStorage.setItem('mainTheme', 'light')
                light.current.style.border = '5px solid var(--primary-color)'
                dark.current.style.border = '5px solid transparent'
                break
            default:
        }
    }, [setMainTheme])

    useEffect(() => {
        if (localStorage.getItem('mainTheme')) {
            changeMainTheme(localStorage.getItem('mainTheme'))
        } else {
            localStorage.setItem('mainTheme', 'light')
            changeMainTheme(localStorage.getItem('mainTheme'))
        }
    }, [changeMainTheme])

    return (
        <ContainerTheme>
            <img className='icon' src={images.bushIcon} alt="change-theme" />
            <AcordeonContent className='acordeon-content'>
                <SmallTitle>Tema Principal</SmallTitle>
                <MainTheme>
                    <li onClick={() => changeMainTheme(dark)} id='dark' ref={dark}>
                        <DarkModeIcon />
                    </li>
                    <li onClick={() => changeMainTheme(light)} id='light' ref={light}>
                        <LightModeIcon />
                    </li>
                </MainTheme>
                <Line />
                <SmallTitle>Escolha Seu Pokémon!!</SmallTitle>
                <PokemonTheme>
                    <PokemonsIcon />
                </PokemonTheme>
            </AcordeonContent>
        </ContainerTheme>
    )
}

export { ThemeToggler }