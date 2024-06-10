import './App.css';
import Header from './components/Header/Header';
import React, { Suspense, createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products/Products';
import Categories from './pages/Categories/Categories';
import Users from './pages/Users/Users';
import { Box } from '@mui/material';
import CategoryFormPage from './pages/Categories/CategoryFormPage';
import ProductFormPage from './pages/Products/ProductFormPage';
import UserFormPage from './pages/Users/UserFormPage';
import Login from './pages/Login/Login';
import PrivateRoutes from './PrivateRoutes';
import PasswordFormPage from './pages/Users/PasswordFormPage';

export const UserContext = createContext();

function App() {

  const [role, setRole] = useState(localStorage.getItem('userRole'));

  return (
    <UserContext.Provider value={role}>
      <Box gap={4} mx={4} sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
        <Header setRole={setRole} />
        <div>
          <Routes>
            <Route path='/login' element={<Login setRole={setRole} />} />
            <Route element={<PrivateRoutes />} >
              <Route path='/products' element={<Products />} />
              <Route path='/categories' element={<Categories />} />
              <Route path='/users' element={<Users />} />
              <Route path='/categoryForm' element={<CategoryFormPage />} />
              <Route path='/productForm' element={<ProductFormPage />} />
              <Route path='/userForm' element={<UserFormPage />} />
              <Route path='/passwordForm' element={<PasswordFormPage />} />
            </Route>
          </Routes>
        </div>
      </Box>
    </UserContext.Provider>
  );
}

export default App;
