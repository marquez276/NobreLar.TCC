//npm install react-router-dom
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from './pages/Header/header';
import Home from './pages/Home/home';
import Formulario from './pages/Formulario/formulario';
import Login from './pages/Login/login';
import Moradia from './pages/Moradia/moradia' //aqui
import Usuario from "./pages/Usuario/usuario";
import UsuarioLayout from "./pages/Usuario/usuario_layout";
import MoradiaDetalhes from "./pages/MoradiaDetalhes/moradiaDetalhes";
import Ajuda from "./pages/Ajuda/ajuda";

function RoutesApp() {

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/usuario" element={<Usuario />} />
                <Route element={<Layout />}>



                    <Route path="/home" element={<Home />} />
                    <Route path="/formulario" element={<Formulario />} />
                    <Route path="/moradia" element={<Moradia />} />
                    <Route path="/moradia/:id" element={<MoradiaDetalhes />} />
                    <Route path="/usuario_layout" element={<UsuarioLayout />} />
                    <Route path="/ajuda" element={<Ajuda />} />
                </Route>


            </Routes>
        </BrowserRouter>

    );

}

function Layout() {
    return (
        <>
            <Header /> {/*exibe o cabeçalho*/}

            <main>
                <Outlet />
            </main>

        </>
    )
}




export default RoutesApp
