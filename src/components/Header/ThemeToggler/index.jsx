import images from '../../../constants/images'
import { MainTheme } from './MainTheme'
import { PokemonTheme } from './PokemonTheme'
import { Line, SmallTitle } from '../../../styles/components-style'
import { AcordeonContent, ContainerTheme } from './style'

function ThemeToggler() {
    return (
        <ContainerTheme>
            <button className='icon'>
                <img src={images.bushIcon} alt="change-theme" />
            </button>
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