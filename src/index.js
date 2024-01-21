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
import LoginForm from "../src/layout/components/loginForm/loginform";
import TaskManager from './layout/components/taskManager/taskManager';
import Calendar from './layout/components/taskManager/calendar/calendar';
import TaskToday from './layout/components/taskManager/taskComponents/taskToday';
import TaskNestSevenDay from './layout/components/taskManager/taskComponents/taskNestSevenDay';
import Inbox from './layout/components/taskManager/taskComponents/Inbox';
import Completed from './layout/components/taskManager/taskComponents/completed';
import Trash from './layout/components/taskManager/taskComponents/trash';
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
          path:"taskmanager/",
          element:<TaskManager/>,
          children:[{
            path:"today",
            element:<TaskToday/>
          },
          {
            path:"nextseven",
            element:<TaskNestSevenDay/>
          },
          {
            path:"inbox",
            element:<Inbox/>
          },
          {
            path:"completed",
            element:<Completed/>
          },
          {
            path:"trash",
            element:<Trash/>
          }
          ,]
      },
      {
        path:"calendar",
        element:<Calendar/>
    },
  
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
 