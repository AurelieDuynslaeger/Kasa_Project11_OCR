import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import RentDetail from '../pages/RentDetail/RentDetail'
import NotFound from '../pages/NotFound/NotFound'

const AppRouter = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rent/:id" element={<RentDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  )
}

export default AppRouter