import { PokemonCardsList } from '../../components/PokemonCardsList'

import './index.css'

function PokemonList() {
    return (
        <main>
            <h2 className="generic-phrase">Saiba mais sobre os movimentos e habilidades dos pokémons aqui ;D</h2>
            <h1 className='cards__title'>Pokémons</h1>
            <div className='cards'>
                <PokemonCardsList />
            </div>
        </main>
    )
}

export { PokemonList }