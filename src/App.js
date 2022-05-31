import './App.css';
import Cover from './components/cover/Cover';
import Navbar from './components/cover/navbar/Navbar';


//Importar componentes
import Create from './components/Create';
import Edit from './components/Edit';
import Show from './components/Show';

//Importamos el router
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (

    <div className='App'>
       <Cover/>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Show/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/edit/:id' element={<Edit/>} />

        </Routes>
      </BrowserRouter>
     
  
     

  
  </div>
  )
}

export default App;
