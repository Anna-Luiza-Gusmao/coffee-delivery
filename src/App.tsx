import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Home } from "./pages/Home/Home"
import { CoffeeContextProvider } from './context'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeContextProvider>
        <Home />
      </CoffeeContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}