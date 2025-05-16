import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/HomePage/Home";
import Folio from "../Pages/FolioPage/Folio";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <Home />},
        ],
    },
    {
        path: "/folio",
        element: <Folio />,
    }
])