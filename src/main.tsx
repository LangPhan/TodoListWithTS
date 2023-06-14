import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.tsx';
import LoginScreen from './screens/LoginScreen.tsx';
import RegisterScreen from './screens/RegisterScreen.tsx';
import ErrorScreen from './screens/ErrorScreen.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>} errorElement = {<ErrorScreen/>} >
      <Route path='/' element = {<HomeScreen/>}></Route>
      <Route path='/login' element = {<LoginScreen/> }/>
      <Route path='/register' element = {<RegisterScreen/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
