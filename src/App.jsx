// import React from "react";
import {
    BrowserRouter as 
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            // kids
        ],
    },
]);

const App = () => {
    return (
        <>
            <div className="hello">
                <h1>Hi, how can I help you today?</h1>
            </div>
            {/* <RouterProvider router={router} /> */}
        </>
    );
};

export default App;