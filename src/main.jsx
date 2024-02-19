import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/Routes/ErrorPage.jsx';
import { FormProvider } from './components/Form/FormContext.jsx';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import './App.css';
import './index.css';

if (process.env.NODE_ENV === 'production') disableReactDevTools()

const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
    errorElement: <ErrorPage />,
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  </React.StrictMode>
)
