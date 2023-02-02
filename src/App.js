import { useContext } from 'react';
import { ThemeContext } from './contexts/themes';
import { AppRoutes } from './pages/router'
import { Variables } from './styles/variables'
import { GlobalStyle } from './styles/global-style'

function App() {
  const { mainTheme, pokemonTheme } = useContext(ThemeContext)

  return (
    <>
      <Variables mainTheme={mainTheme} pokemonTheme={pokemonTheme} />
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;