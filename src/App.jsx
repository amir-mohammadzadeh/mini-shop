import Navigation from './components/Navigation/Navigation'
import { router } from './router'
import ContextStateManager from './ContextStateManager'
import { useRoutes } from 'react-router'
import Footer from './components/Footer/Footer'


function App() {
  const routes = useRoutes(router)
  return (
    <>
      <ContextStateManager >
        <Navigation />
        {routes}
        <Footer  />
      </ContextStateManager>
    </>
  )
}

export default App
