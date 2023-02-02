import { useState, createContext } from 'react'

const LoadingContext = createContext()

function LoadingProvider({ children }) {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <LoadingContext.Provider value={{isLoaded, setIsLoaded}}>
            {children}
        </LoadingContext.Provider>
    )
}

export { LoadingProvider, LoadingContext }