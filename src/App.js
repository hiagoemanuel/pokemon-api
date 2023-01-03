import { AppRoutes } from './pages/router'

import { ThemeProvider } from './contexts/themes';

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;