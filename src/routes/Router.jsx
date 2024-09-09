import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import React from "react";
import Todo from "../components/Todo";
import Home from "../components/Home";
import Counter from "../components/Counter";
import Contact from "../components/Contact";
import Login from "../components/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Link to="todo">Todo</Link>
        <Link to="home">Home</Link>
        <Link to="counter">Counter</Link>
        <Link to="login">Login</Link>
        <Link to="contact">Contact</Link>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "todo",
        element: <Todo />,
      },
      { path: "home", element: <Home /> },
      { path: "counter", element: <Counter /> },
      { path: "login", element: <Login /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
