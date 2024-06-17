import 'normalize.css';
import './fonts/fonts.scss';
import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';
import Preloader from './components/preloader/Preloader.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider 
        router={router} 
        // fallbackElement={<Preloader />}
      />
    </Provider>
  </React.StrictMode>,
)
