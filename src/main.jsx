import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Pages/Homepage.jsx";
import LoginC from "./components/Pages/LoginC.jsx";
import AuthLayout from "./components/authLayout.jsx";
import AllPosts from "./components/Pages/AllPosts.jsx";
import EditPost from "./components/Pages/EditPost.jsx";
import AddPost from "./components/Pages/addPost.jsx";
import Post from "./components/Pages/Post.jsx";
import Sign_up from "./components/Pages/Sign_up.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authenticate={false}>
            <LoginC />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authenticate={false}>
            <Sign_up />
          </AuthLayout>
        ),
      },
      {
        path: "/allposts/",
        element: (
          <AuthLayout authentication>
            {" "}
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/editpost/:slug",
        element: (
          <AuthLayout authenticate>
            {" "}
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/addpost",
        element: (
          <AuthLayout authenticate>
            {""}
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: (
          <AuthLayout>
            {""}
            <Post />
          </AuthLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
