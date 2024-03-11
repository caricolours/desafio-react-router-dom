import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './assets/Componentes/Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Contact from './Views/Contact';
import NotFound from './Views/NotFound';

function App() {

  return (
    <>
      <Navigation/>
      <Routes>

        <Route 
        path='/'
        element={<Home />}>
        </Route>
       
        <Route
         path='/contact'
         element={<Contact />}>
        </Route>

        <Route
         path='*'
         element={<NotFound />}>
        </Route>

      </Routes>
    </>
  )
}

export default App
