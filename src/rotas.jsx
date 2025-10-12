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
import Favoritos from "./pages/Favoritos/favoritos";
import { AuthProvider } from './context/AuthContext';

function RoutesApp() {

    return (
        <AuthProvider>
            <BrowserRouter>

                <Routes>

                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/usuario" element={<Usuario />} />
                    <Route path="/formulario" element={<Formulario />} />
                    <Route path="/moradia" element={<Moradia />} />
                    <Route path="/moradia/:id" element={<MoradiaDetalhes />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                    <Route path="/usuario_layout" element={<UsuarioLayout />} />
                    <Route path="/ajuda" element={<Ajuda />} />
                    </Route>


                </Routes>
            </BrowserRouter>
        </AuthProvider>

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
