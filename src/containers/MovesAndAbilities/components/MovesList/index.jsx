import { ContainerContent, Moves } from './style'
import { MainTitle } from '../../../../styles/components-style'

function MovesList({ moves }) {
    if (!moves) return

    return (
        <Moves>
            <MainTitle><h1>Movimentos</h1></MainTitle>
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