import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Timeline from "../pages/Timeline/Timeline";
import ErrorPage from "../pages/error/ErrorPage";
import FriendsDetails from "../pages/home/FriendsDetails";
import Stats from "../pages/stats/Stats";


export const router = createBrowserRouter([
  {
    path: "/",
    Component : RootLayout,
    children : [
        {
            index :true,
            Component : Home
        },
        {
            path : '/timeline',
            Component : Timeline
        },
        {
          path : '/home/:id',
          Component : FriendsDetails
        },
        {
          path : '/stats',
          Component : Stats
        },
        
    ], errorElement : <ErrorPage/>
  },
]);