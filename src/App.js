import { Header } from './containers/Header'
import { AppRoutes } from './pages/router'
import { Footer } from './containers/Footer'

import './App.css'

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;