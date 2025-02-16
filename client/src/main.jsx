import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App.jsx';
import reducers from './reducers';
import ErrorBoundary from './ErrorBoundary.jsx';
import './index.css';

// console.log("main");
const store = configureStore({ reducer: reducers })
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
)
