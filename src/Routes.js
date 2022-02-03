import { Route, Routes, BrowserRouter } from "react-router-dom";

import {Home} from "./pages/Home";
import {Project} from "./pages/Projects";

const routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/" exact />
                <Route element={<Project/>} path="/Projetos" />
            </Routes>
        </BrowserRouter>
    )
}

export default routes;