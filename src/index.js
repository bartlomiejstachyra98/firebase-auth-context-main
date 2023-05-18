import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './components/store';
import AddData from './components/addData';
import { Route, Routes } from 'react-router-dom';
import { StoreContext } from './components/context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/add' element={<AddData />} />
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('root')
)


