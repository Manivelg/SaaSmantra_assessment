import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Banner';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Feature /> 
    <Form/>
    <Footer />
  </React.StrictMode>
);

