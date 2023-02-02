import { createContext, useState } from 'react'

const FilterContext = createContext('')

function FilterProvider({ children }) {
    const [currentFilter, setCurrentFilter] = useState('all')

    return (
        <FilterContext.Provider value={{currentFilter, setCurrentFilter}}>
            {children}
        </FilterContext.Provider>
    )
}

export { FilterContext, FilterProvider }