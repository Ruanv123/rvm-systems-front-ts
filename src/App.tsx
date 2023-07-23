import { ThemeProvider } from 'styled-components'
import Routes from './router/router'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const theme = {
    background: {
      light: '#fff',
      dark: '#333',
    },
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  )
}

export default App
