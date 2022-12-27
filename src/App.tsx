import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { CoffeeContextProvider } from './context'

import { BrowserRouter } from 'react-router-dom'
import { Routers } from './Routers'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Routers />
        </CoffeeContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}