import { ContainerContent, Moves } from './style'
import { ContainerTitle } from '../AbilitiesList/style'

function MovesList({ moves }) {
    if (!moves) return

    return (
        <Moves>
            <ContainerTitle><h1>Movimentos</h1></ContainerTitle>
            <ContainerContent>
                {
                    moves.map((move, index) => {
                        return <li key={index}>{move}</li>
                    })
                }
            </ContainerContent>
        </Moves>
    )
}

export { MovesList }