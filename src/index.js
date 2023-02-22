import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LanguageProvider from './components/language/Language';
import ThemeProvider from './components/theme/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>,
);
