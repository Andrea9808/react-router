import React from "react";
import Home from "./pages/Home";
import About from './pages/About'
import Profile from './pages/Profile'
import SingleProfile from './pages/SingleProfile'
import ErrorPage from './pages/ErrorPage'
import MyProfile from './pages/MyProfile'

export const routes = [

    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/profile',
        element: <Profile/>,
        children: [
            {
                path: 'me',
                element: <MyProfile/>
            },
            {
                path: ':id',
                element: <SingleProfile/>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>
    }

]

export default routes