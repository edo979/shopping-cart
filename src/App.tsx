import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/">
            <Route path="store" element={<Store />} />
            <Route path="about" element={<About />} />
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Container>
    </>
  )
}

export default App
