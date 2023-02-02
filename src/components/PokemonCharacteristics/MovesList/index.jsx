import { MainTitle } from '../../../styles/components-style'
import { ContainerContent, Moves } from './style'

function MovesList({ moves }) {
    if (!moves) return
    if (moves.length === 0) return
    
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