import React from 'react';
import { Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import './styles/App.module.css';

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
