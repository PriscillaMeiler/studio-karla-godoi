import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
// import App from './App.tsx'
import AppRoutes from './routes.tsx';
import PageHeader from './components/header.tsx'
import PageFooter from './components/footer.tsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageHeader />
    <AppRoutes />
    <PageFooter />
  </React.StrictMode>
);