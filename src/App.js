import { GlobalStyle } from './styles/global-style'

import { Header } from './containers/Header'
import { AppRoutes } from './pages/router'
import { Footer } from './containers/Footer'


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;