import { useState, createContext } from 'react'

const CurrentTypeContext = createContext()

function CurrentTypeProvider({ children }) {
    const [currentType, setCurrentType] = useState('all')

    return (
        <CurrentTypeContext.Provider value={{ currentType, setCurrentType }}>
            {children}
        </CurrentTypeContext.Provider>
    )
}

export { CurrentTypeProvider, CurrentTypeContext }