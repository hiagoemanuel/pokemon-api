import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CurrentTypeProvider } from './contexts/current-type';
import { CardsProvider } from './contexts/pokemons-card';
import { ThemeProvider } from './contexts/themes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <CurrentTypeProvider>
            <CardsProvider>
                <App />
            </CardsProvider>
        </CurrentTypeProvider>
    </ThemeProvider>
);