import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import GlobalStyle from './styles/global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
      <ToastContainer/>
    </ThemeProvider>
  )
}

export default App
