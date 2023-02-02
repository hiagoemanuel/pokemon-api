import { useCallback, useContext, useEffect } from 'react'

import { ThemeContext } from '../../../../contexts/themes' 
import { themes } from '../../../../constants/themes'
import { dataPersistence } from '../../../../services/dataPersistence'

import { DarkModeIcon, LightModeIcon } from '../../../../constants/vectors'

import { Theme } from './style'

function MainTheme() {
    const { setMainTheme } = useContext(ThemeContext)

    const changeMainTheme = useCallback((ref) => {
        const dark = document.getElementById('dark')
        const light = document.getElementById('light')

        switch (ref) {
            case 'dark':
                setMainTheme(themes.mainTheme.darkMode)
                dark.classList.add('currentTheme')
                light.classList.remove('currentTheme')
                localStorage.setItem('mainTheme', 'dark')
                break
            case 'light':
                setMainTheme(themes.mainTheme.lightMode)
                light.classList.add('currentTheme')
                dark.classList.remove('currentTheme')
                localStorage.setItem('mainTheme', 'light')
                break
            default:
        }
    }, [setMainTheme])

    useEffect(() => dataPersistence('mainTheme', 'light', changeMainTheme), [changeMainTheme])

    return (
        <Theme>
            <li onClick={() => changeMainTheme('dark')} id='dark'><DarkModeIcon /></li>
            <li onClick={() => changeMainTheme('light')} id='light'><LightModeIcon /></li>
        </Theme>
    )
}

export { MainTheme }