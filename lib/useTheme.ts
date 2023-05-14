import * as React from "react"
import {ThemeContext} from "./ThemeProvider"
import invariant from "tiny-invariant"
// type for useTheme it will return a string or throw an error using invariant
export type useThemeReturn = {
    className: string
}
export const useTheme = ():useThemeReturn => {
    // get the theme from the context
    const theme = React.useContext(ThemeContext)
    // if there is no theme throw an error
    invariant(theme, "useTheme must be used within a ThemeProvider")
    // return the theme
    return theme
}