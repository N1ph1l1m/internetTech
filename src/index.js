import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Router/root';
import ErrorPage from '../src/components/Router/errorPage'
//import SandBoxButton from "../src/components/button/sandBoxButton";
import LoginForm from "../src/layout/components/loginForm/loginform";
// import Registration from './layout/components/loginForm/registration/registration';
import TaskManager from './layout/components/taskManager/taskManager';
const router  = createBrowserRouter([
  {
    path:"/",
    element:<LoginForm/>,
    errorElement:<ErrorPage/>,
    children:[
      // {
      //     path:"/task",
      //     element:<TaskManager/>
      // },
    //   {
    //     path:"/login",
    //     element:<LoginForm/>
    // },
    ]
  },  
  {
    path:"/task",
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
          path:"taskmanager",
          element:<TaskManager/>
      },
    //   {
    //     path:"/login",
    //     element:<LoginForm/>
    // },
    ]
  },  
  
  ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 