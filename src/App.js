import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import Thrift from './Thrift'
import Dispose from './Dispose'
import NewLife from './NewLife'
import Recycle from './Recycle'
import Orders from './Orders'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/thrift' element={<Thrift />} />
        <Route path='/dispose' element={<Dispose />} />
        <Route path='/new-life' element={<NewLife />} />
        <Route path='/recycle' element={<Recycle />} />
        <Route path='/order' element={<Orders />} />
      </Routes>
    </Router>
  )
}