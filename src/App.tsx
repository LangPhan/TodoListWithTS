import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.tsx";
import LoginScreen from "./screens/LoginScreen.tsx";
import RegisterScreen from "./screens/RegisterScreen.tsx";
import ErrorScreen from "./screens/ErrorScreen.tsx";
import AppScreen from "./screens/AppScreen.tsx";
import UserScreen from "./screens/UserScreen.tsx";

const App: React.FC = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppScreen />} errorElement={<ErrorScreen />}>
        <Route path="/" element={ <HomeScreen />}></Route>
        <Route path="/user" element={<UserScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
