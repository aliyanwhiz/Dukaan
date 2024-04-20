import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';
import BillsPage from './pages/BillsPage';
import CustomersPage from './pages/CustomersPage';

const App:React.FC = () => (
  <>
    <BrowserRouter>
        <Routes>
          <Route  path='/' element={<HomePage />} />
          <Route  path='/items' element={<ItemsPage />} />
          <Route  path='/bills' element={<BillsPage />} />
          <Route  path='/customers' element={ <CustomersPage /> } />
        </Routes>
    </BrowserRouter>
  </>
);

export default App;