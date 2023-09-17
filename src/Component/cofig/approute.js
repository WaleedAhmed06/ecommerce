import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from '../home'
import Card from '../card'
import Nav from '../nav'
import Singlepost from '../singlepost'
import Dashboard from '../dashboard'

export default function Approute() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='card' element={<Card/>}/>
        <Route path='singlepost/:id' element={<Singlepost/>}/>
        <Route path='dashboard/*' element={<Dashboard/>}/>  {/*nested route bananey k liya (/*) use krein */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}
