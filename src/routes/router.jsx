import {
    createBrowserRouter,
  } from "react-router";
import Layouts from "../layouts/Layouts";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Error from "../components/pages/Error";
import SubBoxCardDetails from "../components/SubscribtionBox/SubBoxCardDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ForgetPass from "../components/ForgetPass/ForgetPass";
import MySubscription from "../components/pages/MySubscription/MySubscription";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts></Layouts>,
      errorElement: <Error />

    },
    {
       path: "/login",
        Component: Login
     
    },
    {
      path: "/register",
      Component: Register
    },
    {
      path: "*", 
      element: <Error />
    },
    {
      path: "/subscriptiondetails/:id",
      loader: async () => {
        const res = await fetch('/icenest_boxes.json');
        const data = await res.json();
        return data;
      },
      Component: () => (
        <PrivateRoute>
          <SubBoxCardDetails></SubBoxCardDetails>
        </PrivateRoute>
      )
    },
    {
      path: "/forgot-password",
      element : <ForgetPass></ForgetPass>
    },
    {
      path: "/my-subscription",
      element: (
        <PrivateRoute>
          <MySubscription />
        </PrivateRoute>
      ),
    }
  
  ]);

  export default router