import { useContext, useEffect, useState } from 'react'
import { setPokemonsFilterData } from '../../../services/setPokemonsFilterData'
import { getPokemonsTypeName } from '../../../services/getPokemonsTypeName'
import { attributedCards } from '../../../constants/attributed-cards'
import images from '../../../constants/images'
import { LoadingContext } from '../../../contexts/loading-state'
import { CardsListContext } from '../../../contexts/pokemons-card'
import { FilterContext } from '../../../contexts/current-filter'
import { Line, SmallTitle } from '../../../styles/components-style'
import { ContainerFilter, AcordeonContent, ContainerTypes } from './style'

let selectedType

function Filter() {
    const [listOfTypeNames, setListOfTypeNames] = useState([])
    const { setIsLoaded } = useContext(LoadingContext)
    const { pokemonsCard, setPokemonsCard, offSet, setOffSet, listBackup, setListBackup} = useContext(CardsListContext)
    const {currentFilter, setCurrentFilter} = useContext(FilterContext)

    useEffect(() => {
        async function fetchData() {
            const response = await getPokemonsTypeName('')
            setListOfTypeNames(response)
        }
        fetchData()
    }, [setListOfTypeNames])

    useEffect(() => {
        const typeButtonActive = document.getElementsByClassName(currentFilter)[0]        
        if (typeButtonActive) typeButtonActive.classList.add('selected-type')
        if (selectedType) selectedType.classList.remove('selected-type')
        selectedType = typeButtonActive
    }, [currentFilter, listOfTypeNames])
    
    async function toggleFilteredPokemons(url, type) {
        setCurrentFilter(type)
        setIsLoaded(false)
        
        if (listBackup.currentType === type) {
            setPokemonsCard(listBackup.allPokemons.pokemons)
            setOffSet(listBackup.allPokemons.offSet)
            setCurrentFilter('all')
            listBackup.currentType = 'all'
            return
        }
        const data = await Promise.all(await setPokemonsFilterData(url))
        setPokemonsCard(attributedCards(data).slice(0, 10))
        setListBackup({
            allPokemons: {
                pokemons: currentFilter === 'all' ? pokemonsCard : listBackup.allPokemons.pokemons,
                offSet: currentFilter === 'all' ? offSet : listBackup.allPokemons.offSet
            },
            pokemonType: {
                pokemons: data,
                offSet: currentFilter !== 'all' ? offSet : listBackup.pokemonType.offSet
            },
            currentType: type,
            firstSet: false
        })
    }

    return (
        <ContainerFilter>
            <button className='icon'>
                <img src={images.filterIcon} alt="filter" />
            </button>
            <AcordeonContent className='acordeon-content'>
                <SmallTitle>Filtre pelos tipos de pokémons</SmallTitle>
                <Line />
                <ContainerTypes>
                    {listOfTypeNames.map((type, index) => (
                        <button
                            className={type.name}
                            key={index}
                            onClick={() => toggleFilteredPokemons(type.url, type.name)}
                        >{type.name}</button>
                    ))}
                </ContainerTypes>
            </AcordeonContent>
        </ContainerFilter>
    )
}

export { Filter }