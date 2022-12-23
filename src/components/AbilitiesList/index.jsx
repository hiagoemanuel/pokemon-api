import { useEffect, useState } from 'react'

import { getDiscriptionAbility } from '../../services/getDiscriptionAbility';

import { Ability, AbilityDetails, ContainerTitle } from './style'

function AbilitiesList({ abilities }) {
    const [ability, setAbility] = useState([])

    useEffect(() => {
        async function fetchData() {
            if (!abilities) return

            const discriptionResponse = await Promise.all(abilities.map(item => getDiscriptionAbility(item.urlDiscription)))
            const data = discriptionResponse.map((item, index) => {
                return {
                    name: abilities[index].name,
                    discription: item
                }
            })
            setAbility(data)
        }
        fetchData()
    }, [])

    return (
        <Ability>
            <ContainerTitle><h1>Habilidades</h1></ContainerTitle>
            {
                ability.map((ability, index) => (
                    <AbilityDetails key={index}>
                        <h2>{ability.name}</h2>
                        <p>{ability.discription}</p>
                    </AbilityDetails>
                ))
            }
        </Ability>
    )
}

export { AbilitiesList }