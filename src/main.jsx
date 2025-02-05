import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile.jsx';
import Experience from './Components/Experience/Experience.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Login from './Components/Login/Login.jsx';
import Root from './Components/Root/Root.jsx';
import AdventureDetails from './Components/AdventureDetails/AdventureDetails.jsx';
import Faq from './Components/Faq/Faq.jsx';
import EventWorkshops from './Components/EventWorkshops/EventWorkshops.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';
import Profile from './Components/Profile/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/eventWorkshops',
        element: <EventWorkshops/>,
      },
      {
        path: '/faq',
        element: <Faq/>,
      },
      {
        path: "/adventureDetails",
        element: <AdventureDetails />
      },
      {
        path: "/UpdateProfile",
        element: <UpdateProfile />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: '/aboutUs',
        element: <AboutUs/>,
      },
      {
        path: '/contactUs',
        element: <ContactUs/>,
      },
      {
        path: '/signUp',
        element: <SignUp/>,
      },
      {
        path: '/profile',
        element: <Profile/>,
      }
    ],
  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
