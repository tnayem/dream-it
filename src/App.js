import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './LayOut/Main';
import Home from './Component/Home/Home';
import Courses from './Component/Courses/Courses';
import Faq from './Component/Faq/Faq';
import Blog from './Component/Blog/Blog';
import LogIn from './Component/LogIn/LogIn';
import SignUp from './Component/SignUp/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader: async () => {
            return fetch('http://localhost:5000/course-data');
          },
          element:<Home></Home>
        },{
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/courses',
          loader: async () => {
            return fetch('http://localhost:5000/course-data');
          },
          element:<Courses></Courses>
        },
        {
          path:'/faq',
          element:<Faq></Faq>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/login',
          element:<LogIn></LogIn>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'*',
          element:<h1>Page Not Found</h1>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
