import React, {useState, useEffect} from 'react';
import './App.css';
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';


//Importar componentes
import Create from './components/Create';
import Edit from './components/Edit';
import Show from './components/Show';

//Importamos el router
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  //Posicion del scroll
  const {scrollHeight, setScrollHeight} = useState(0);

  const handleScroll = () =>{
    const position = window.pageYOffset;
    setScrollHeight(position);

  };

  useEffect(() => {
    window.addEventListener("scroll",handleScroll);
  }, [scrollHeight]);

  return (

    <div className='App'>
       
      <Navbar isScrolling={scrollHeight}/>
      <Cover/>
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