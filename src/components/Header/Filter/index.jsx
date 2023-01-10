import { useContext, useEffect, useState } from 'react'
import images from '../../../constants/images'

import { ContainerFilter, AcordeonContent, ContainerTypes } from './style'
import { Line, SmallTitle } from '../../../styles/components-style'
import { getPokemonsTypeName } from '../../../services/getPokemonsTypeName'
import { setPokemonsFilterData } from '../../../services/setPokemonsFilterData'
import { CardsListContext } from '../../../contexts/pokemons-card'
import { attributedCards } from '../../../constants/attributed-cards'
import { CurrentTypeContext } from '../../../contexts/current-type'

let selectedType

function Filter() {
    const [typesName, setTypeName] = useState([])
    const { setPokemonsCard } = useContext(CardsListContext)
    const { currentType, setCurrentType } = useContext(CurrentTypeContext)

    useEffect(() => {
        async function fetchData() {
            const response = await getPokemonsTypeName('')
            setTypeName(response)
        }
        fetchData()
    }, [setTypeName])

    async function setFilterData(url, type) {
        const data = await Promise.all(await setPokemonsFilterData(url))
        setCurrentType(type)
        setPokemonsCard([...attributedCards(data)])

    }

    useEffect(() => {
        const typeButtonActive = document.getElementsByClassName(currentType)[0]
        if (typeButtonActive) typeButtonActive.classList.add('selected-type')
        if (selectedType) selectedType.classList.remove('selected-type')
        selectedType = typeButtonActive
    }, [currentType])

    return (
        <ContainerFilter>
            <img className='icon' src={images.filterIcon} alt="filter" />
            <AcordeonContent className='acordeon-content'>
                <SmallTitle>Filtre pelos tipos de pokémons</SmallTitle>
                <Line />
                <ContainerTypes>
                    {typesName.map((type, index) => (
                        <input
                            className={type.name}
                            key={index}
                            type="submit"
                            value={type.name}
                            onClick={() => setFilterData(type.url, type.name)}
                        />
                    ))}
                </ContainerTypes>
            </AcordeonContent>
        </ContainerFilter>
    )
}

export { Filter }