import { TypeList } from "./style"

function PokemonType({ typeList }) {

    return (
        <TypeList>
            {
                typeList ? typeList.map((type, index) => <li key={index}>{type}</li>) : []
            }
        </TypeList>
    )
}

export { PokemonType }