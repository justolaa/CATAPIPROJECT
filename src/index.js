import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ImagesProvider } from "../src/context/context";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
<ImagesProvider>
      <App />
</ImagesProvider>
    );
