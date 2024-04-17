import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';

const App:React.FC = () => (
  <>
    <BrowserRouter>
        <Routes>
          <Route  path='/' element={<HomePage />} />
          <Route  path='/items' element={<ItemsPage />} />
        </Routes>
    </BrowserRouter>
  </>
);

export default App;