import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Routes } from './router/router'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [theme, setTheme] = useState({})
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  )
}

export default App
