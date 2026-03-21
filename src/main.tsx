import { createRoot } from 'react-dom/client';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import './index.css';
import App from '@example/ROUTER/App';
import About from './example/ROUTER/pages/About/About';
import Contact from './example/ROUTER/pages/Contact/Contact';
import MainLayout from './example/ROUTER/layouts/MainLayout';
import ErrorPage from './example/ROUTER/pages/404/ErrorPage';
import PrivateRoute from './example/ROUTER/PrivateRoute/PrivateRoute';
import PrivateLayout from './example/ROUTER/layouts/PrivateLayout';
import AuthLayout from './example/ROUTER/layouts/AuthLayout';
import Login from './example/ROUTER/pages/Login/Login';
import Register from './example/ROUTER/pages/Register/Register';
import Dashboard from './example/ROUTER/pages/Dashboard/Dashboard';
import LoaderExample from './example/ROUTER/pages/LoaderExample/LoaderExample';

// Пример react-router LOADER: данные загружаются до рендера страницы
async function loaderExampleLoader() {
  await new Promise((r) => setTimeout(r, 300)); // имитация запроса
  return {
    message: 'Данные из loader',
    timestamp: Date.now(),
    items: ['React', 'Router', 'Loader'],
  };
}

const router = createBrowserRouter([
  // Auth: отдельный layout для Login / Register (порядок важен)
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  // PrivateRoute + PrivateLayout + localStorage
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        element: <PrivateLayout />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          {
            path: "loader-example",
            element: <LoaderExample />,
            loader: loaderExampleLoader,
          },
        ],
      },
    ],
  },
  // Публичные страницы
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

const root = document.getElementById("root")!;

createRoot(root).render(
  <RouterProvider router={router} />,
);

