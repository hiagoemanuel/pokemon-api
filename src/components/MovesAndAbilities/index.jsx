import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPokemonInfo } from '../../services/getPokemonInfo'
import { attributedCards } from '../../constants/attributed-cards'

import { ToTopButton } from '../ToTopButton'
import { PokemonType } from './PokemonType'
import { AbilitiesList } from './AbilitiesList'
import { MovesList } from './MovesList'

import { MainStyle, ContainerCard, Card, ContainerContent } from './style'

function MovesAndAbilities() {
    const { id } = useParams()
    const [pokemonInfo, setPokemonInfo] = useState({})

    useEffect(() => {
        async function fetchData() {
            const response = await getPokemonInfo(id)
            setPokemonInfo(attributedCards([response])[0])
        }
        fetchData()
    }, [id])
    return (
        <MainStyle>
            <Link to='/' className='to-home'>{'< Voltar'}</Link>
            <ContainerCard>
                <Card>
                    <img src={pokemonInfo.image} alt="pokemon" />
                    <h1>{pokemonInfo.name}</h1>
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
}

export { MovesAndAbilities }