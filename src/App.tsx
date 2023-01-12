import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Don from './components/Don';
import Vardaan from './components/Vardaan';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Don />} />
    <Route path='/vardaan' element={<Vardaan />} />
   </Routes>
  );
}

export default App;
