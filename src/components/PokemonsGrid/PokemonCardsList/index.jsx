import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { setPokemonData } from '../../../services/setPokemonData'
import { attributedCards } from '../../../constants/attributed-cards'
import { CardsListContext } from '../../../contexts/pokemons-card'
import { LoadingContext } from '../../../contexts/loading-state'
import { Loading } from '../../Loading'
import { Card, Image, Name } from './style'

function PokemonCardsList() {
    const { pokemonsCard, setPokemonsCard, setOffSet, listBackup } = useContext(CardsListContext)
    const {isLoaded, setIsLoaded} = useContext(LoadingContext)

    useEffect(() => {
        if (listBackup.firstSet) {
            async function fetchData() {
                const data = await Promise.all(await setPokemonData())
                setPokemonsCard([...attributedCards(data)])
            }
            fetchData()
            listBackup.firstSet = false
        } else if (listBackup.currentType === 'all') {
            setPokemonsCard(listBackup.allPokemons.pokemons)
        }
    }, [listBackup, setOffSet, setPokemonsCard])

    useEffect(() => {
        if (pokemonsCard.length >= 10) { setIsLoaded(true) } else { setIsLoaded(false) }
    }, [pokemonsCard, setIsLoaded])

    if (isLoaded) {
        return pokemonsCard.map((data, index) => (
            <Link to={`pokemon/${data.urlName ?? data.urlId}`} key={index}>
                <Card>
                    <Image src={data.image} alt="pokemon-card" />
                    <Name>
                        <h3>{data.name}</h3>
                        <h3>nº{data.id}</h3>
                    </Name>
                </Card>
            </Link>
        ))
    } else {
        return <Loading />
    }
}

export { PokemonCardsList }