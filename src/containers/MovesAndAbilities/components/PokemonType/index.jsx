import { TypeList } from "./style"

function PokemonType({ typeList }) {
    if (!typeList) return
    return (
        <TypeList>
            {typeList.map((type, index) => <li key={index}>{type}</li>)}
        </TypeList>
    )
}

export { PokemonType }