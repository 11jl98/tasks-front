import { Route, Routes, BrowserRouter } from "react-router-dom";

import {Home} from "./pages/Home";
import {Project} from "./pages/Projects";
import {ViewProject} from "./pages/ViewProject";

const routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/" exact />
                <Route element={<Project/>} path="/Projetos" />
                <Route element={<ViewProject/>} path="/view/Projetos/:id" />
            </Routes>
        </BrowserRouter>
    )
}

export default routes;