import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from '../src/App';
import { AlgosProvider } from './context/data';
import { SortSpeedProvider } from './context/speed';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SortSpeedProvider>
        <AlgosProvider>
          <App />
        </AlgosProvider>
      </SortSpeedProvider>
    </BrowserRouter>
  </React.StrictMode>
);
