  import {
    createBrowserRouter,
  } from "react-router-dom";
  import Layouts from "../layouts/Layouts";
  import Login from "../components/pages/Login";
  import Register from "../components/pages/Register";
  import SubBoxCardDetails from "../components/SubscribtionBox/SubBoxCardDetails";
  import PrivateRoute from "../PrivateRoute/PrivateRoute";
  import ForgetPass from "../components/ForgetPass/ForgetPass";
  import MySubscription from "../components/pages/MySubscription/MySubscription";
  import MyProfile from "../components/pages/MyProfile";
  import Home from "../components/Home/Home";  // Import your Home component
  import Error from "../components/pages/Error"

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />, 
      children: [
        {
          path: "/",
          element: <Home />  
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/forgot-password",
          element: <ForgetPass />
        },
        {
          path: "/subscriptiondetails/:id",
          loader: async () => {
            const res = await fetch('/icenest_boxes.json');
            const data = await res.json();
            return data;
          },
          element: (
            <PrivateRoute>
              <SubBoxCardDetails />
            </PrivateRoute>
          )
        },
        {
          path: "/my-subscription",
          element: (
            <PrivateRoute>
              <MySubscription />
            </PrivateRoute>
          ),
        },
        {
          path: "/profile",
          element: (
            <PrivateRoute>
              <MyProfile />
            </PrivateRoute>
          ),
        },
      ]
    },
    {
      path: "*", 
      element: <Error></Error>
    }
  ]);

  export default router;
