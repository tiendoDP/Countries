import { createContext, useState } from "react"

export const ThemeContext = createContext()

export function ThemeProvider({children}) {
    const [toggle, setToggle] = useState('light')

    const changeTheme = () => {
        setToggle(toggle === 'light' ? 'dark' : 'light')
    }
    const themeValue = {
        toggle,
        changeTheme
    }
    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    )
}