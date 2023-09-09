import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { IssuesContextProvider } from './contexts/IssuesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <IssuesContextProvider>
          <Router />
        </IssuesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
