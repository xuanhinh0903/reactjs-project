import 'primereact/resources/themes/lara-light-blue/theme.css'; // Theme CSS
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.css'

import App from './App.tsx'
import { PrimeReactProvider, } from 'primereact/api';
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import Tailwind from 'primereact/passthrough/tailwind';
import { createRoot } from 'react-dom/client'
import { store } from './store'

// Core CSS



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider value={{ pt: Tailwind }}>
      <Provider store={store}>
        <App />
      </Provider>
    </PrimeReactProvider>
  </StrictMode>,
)
