import { Box } from "./Box"
import {ThemeProvider} from "./ThemeProvider"
export const App = () => {
    return <ThemeProvider>
        <Box pl='$xsmall' borderRadius={'$action-base'} color={'$text-base'} backgroundColor={'$on-background-base'}>Hello</Box>
        <Box color={{lightMode: 'pink', darkMode: 'purple'}}>Hello</Box>
    </ThemeProvider>;
};