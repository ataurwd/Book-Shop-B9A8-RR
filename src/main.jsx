import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import BookDetails from './components/BookDetails';
import ReadPage from './components/Page-to-Read/ReadPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/list-to-read',
        element:<ReadPage/>,
        loader: () => fetch('../public/booksData.json')
      },
      {
        path: '/reading-page',
        element:  <Dashboard/>
      },
      {
        path: 'books/:bookId',
        element: <BookDetails/>,
        loader: () => fetch('../public/booksData.json')
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
