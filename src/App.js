import React from 'react';
import AddBook from './components/addData'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
