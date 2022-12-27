
import images from '../../../../constants/images'

import { PokemonThemeList } from '../PokemonThemeList'

import { CollapseTheme, ContainerTheme, MainTheme, PokemonTheme } from './style'
import { Line, SmallTitle } from '../../../../styles/components-style'

function ThemeToggler({ reference }) {
    return (
        <ContainerTheme>
            <img className='icon' src={images.bushIcon} alt="change-theme" />
            <CollapseTheme ref={reference} style={{display: 'none'}}>
                <SmallTitle>Tema Principal</SmallTitle>
                <MainTheme>
                    <li>
                        <img src={images.darkMode} alt="dark-mode" />
                    </li>
                    <li>
                        <img src={images.lightMode} alt="light-mode" />
                    </li>
                </MainTheme>
                <Line />
                <SmallTitle>Escolha Seu Pokémon!!</SmallTitle>
                <PokemonTheme>
                    <PokemonThemeList />
                </PokemonTheme>
            </CollapseTheme>
        </ContainerTheme>
    )
}

export { ThemeToggler }