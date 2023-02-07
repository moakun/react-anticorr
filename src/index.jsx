import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';
import { ThemeProvider } from '@material-tailwind/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
