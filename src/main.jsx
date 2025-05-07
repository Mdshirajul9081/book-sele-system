import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
import Home from './component/Home/Home.jsx';
import ListedBooks from './component/ListedBooks/ListedBooks.jsx';
import PageToRead from './component/PageToRead/PageToRead.jsx';
import BookDetails from './component/BookDetails/BookDetails.jsx';
import Root from './component/Root/Root.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"books/:bookId",
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('/booksData.json')
      },
      {
        path: "/listed-books", // Add the Listed Books route
        element: <ListedBooks></ListedBooks>,
        loader:()=>fetch('/booksData.json')
      },
      {
        path: "/pages-to-read", // Add the Pages to Read route
        element: <PageToRead></PageToRead>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
