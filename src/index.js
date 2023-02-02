import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoadingProvider } from './contexts/loading-state';
import { CardsProvider } from './contexts/pokemons-card';
import { ThemeProvider } from './contexts/themes';
import { FilterProvider } from './contexts/current-filter';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <LoadingProvider>
            <CardsProvider>
                <FilterProvider>
                    <App />
                </FilterProvider>
            </CardsProvider>
        </LoadingProvider>
    </ThemeProvider>
);