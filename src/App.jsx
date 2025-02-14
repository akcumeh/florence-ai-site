// import { useState } from 'react';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from './components/Home';

const router = createBrowserRouter({
    path: '/',
    element: <Home />,
    children: [
        {
            path: "about",
            element: <About />,
            children: [],
        },
    ],
});

function App() {
    return (
        <div className='text-floBlue text-md'>
           <p>HI!</p>
           <RouterProvider router={router} />
        </div>
    );
};

export default App;
