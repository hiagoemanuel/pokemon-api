import images from '../../../constants/images'

import { MainTheme } from './MainTheme'
import { PokemonTheme } from './PokemonTheme'

import { AcordeonContent, ContainerTheme } from './style'
import { Line, SmallTitle } from '../../../styles/components-style'

function ThemeToggler() {
    return (
        <ContainerTheme>
            <img className='icon' src={images.bushIcon} alt="change-theme" />
            <AcordeonContent className='acordeon-content'>
                <SmallTitle>Tema Principal</SmallTitle>
                <MainTheme />
                <Line />
                <SmallTitle>Escolha Seu Pokémon!!</SmallTitle>
                <PokemonTheme />
            </AcordeonContent>
        </ContainerTheme>
    )
}

export { ThemeToggler }