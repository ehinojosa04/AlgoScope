import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import { SortingRoutes } from './assets/routes/SortingRoutes';

import './App.css'

type route_type = {
  path: string,
  element: React.ReactNode,
  children?: Array<route_type>,
}

const routes = [SortingRoutes]

function render_route(route: route_type){
  return(
    <>
      <Route key={route.path} path={route.path} element={route.element}/>
      {route.children && route.children.map((child) => (
        <Route key={child.path} path={route.path + "/" +child.path} element={child.element}/>
      ))}
    </>
  )
}

export default function App() {
  return (
    <>
      <Navbar/>
      <div className='py-7'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          {routes.map((route) => render_route(route))}
        </Routes>
      </div>
    </>
  )
}