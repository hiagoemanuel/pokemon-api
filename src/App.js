import { Header } from './containers/Header'
import { PokemonList } from './containers/PokemonList'
import { Footer } from './containers/Footer'

import './App.css'

function App() {
  return (
    <>
      <Header />
      <PokemonList />
      <Footer />
    </>
  );
}

export default App;