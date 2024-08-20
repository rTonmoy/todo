
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Home from "./pages/Home";
import Root from "./components/Layout/Root"
import Login from "./components/Login";


let router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route element={<Root/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
  </Route>
  </>
))

function App() {
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
