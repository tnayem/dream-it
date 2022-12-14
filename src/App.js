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
import CourseDetails from './Component/CourseDetails/CourseDetails';
import CheckOut from './Component/CheckOut/CheckOut';
import PrivateRout from './Component/Routs/PrivateRout';
import NotFound from './Component/NotFound/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader: async () => {
            return fetch('https://dream-it-server.vercel.app/courses');
          },
          element:<Home></Home>
        },{
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/courses',
          loader: async () => {
            return fetch('https://dream-it-server.vercel.app/courses');
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
          element:<NotFound></NotFound>
        },
        {
          path:'/courseDetails/:id',
          loader: async ({params}) => {
            return fetch(`https://dream-it-server.vercel.app/courses/${params.id}`);
          },
          element:<CourseDetails></CourseDetails>
        },
        {
          path:'/checkout/:id',
          loader: async ({params}) => {
            return fetch(`https://dream-it-server.vercel.app/courses/${params.id}`);
          },
          element:<PrivateRout><CheckOut></CheckOut></PrivateRout>
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
