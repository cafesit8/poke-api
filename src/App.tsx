import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Details from './pages/Details'

function App() {
  return (
    <Routes>
        <Route path='/poke-api' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/poke-api/details/:name' element={<Details />} />
        </Route>
    </Routes>
  )
}

export default App
