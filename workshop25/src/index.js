import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
        loader: () => fetch('/api/home'),
      },
      {
        path: 'about',
        element: <About />,
        loader: () => fetch('/api/about'),
      },
      {
        path: 'contact',
        element: <Contact />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const name = formData.get('name');
          const email = formData.get('email');
          return fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({ name, email }),
          });
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
