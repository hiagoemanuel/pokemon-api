import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPokemonInfo } from '../../services/getPokemonInfo'
import { attributedCards } from '../../constants/attributed-cards'
import { ToTopButton } from '../ToTopButton'
import { PokemonType } from './PokemonType'
import { AbilitiesList } from './AbilitiesList'
import { MovesList } from './MovesList'
import { Loading } from '../Loading'
import { MainStyle, ContainerCard, Card, ContainerContent } from './style'

function PokemonCharacteristics() {
    const { id } = useParams()
    const [pokemonInfo, setPokemonInfo] = useState()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        async function fetchData() {
            const response = await getPokemonInfo(id)
            setPokemonInfo(attributedCards([response])[0])
        }
        fetchData()
    }, [id])

    useEffect(() => { if (pokemonInfo) setIsLoaded(true) }, [pokemonInfo])

    if (isLoaded) {
        return (
            <MainStyle>
                <Link to='/' className='to-home'>{'< Voltar'}</Link>
                <ContainerCard>
                    <Card>
                        <img src={pokemonInfo.image} alt="pokemon" />
                        <h1>{pokemonInfo.name}</h1>
                        <span>nº{pokemonInfo.id}</span>
                        <PokemonType typeList={pokemonInfo.type} />
                    </Card>
                </ContainerCard>
                <ContainerContent>
                    <AbilitiesList abilities={pokemonInfo.abilities} />
                    <MovesList moves={pokemonInfo.movesName} />
                </ContainerContent>
                <ToTopButton />
            </MainStyle>
        )
    } else {
        return <Loading />
    }
}

export { PokemonCharacteristics }