import { useEffect, useState } from 'react'
import { getDiscriptionAbility } from '../../../services/getDiscriptionAbility'
import { MainTitle } from '../../../styles/components-style'
import { Ability, AbilityDetails } from './style'

function AbilitiesList({ abilities }) {
    const [ability, setAbility] = useState([{
        name: undefined,
        discription: undefined
    }])

    useEffect(() => {
        async function fetchData() {
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
    }, [abilities])

    if (!ability[0].discription) return

    return (
        <Ability>
            <MainTitle><h1>Habilidades</h1></MainTitle>
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