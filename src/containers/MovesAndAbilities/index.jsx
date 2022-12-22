import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPokemonInfo } from '../../services/getPokemonInfo'
import { attributedCards } from '../../constants/attributed-cards'
import { PokemonType } from '../../components/PokemonType'

import { MainStyle, ContainerCard, Card } from './style'

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
    console.log(pokemonInfo)
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
        </MainStyle>
    )
}

export { MovesAndAbilities }