import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../Pages/Homepage/Homepage";
import BasePage from "../Pages/BasePage/BasePage";
import MetricsPage from "../Pages/MetricsPage/MetricsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/homepage", element: <Homepage /> },
            { path: "/Company/:ticker", element: <BasePage />},
            { path: "/Company/:ticker/:metric", element: <MetricsPage />, children: [] }
        ],
    }
])