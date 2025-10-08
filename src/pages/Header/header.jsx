import { Link } from 'react-router-dom'
import Logo from '../img/Logo.png'
import './header.css'
import { useState, useEffect } from 'react'
import api from 'axios'

function Header() {
    const [usuario, setUsuario] = useState(null)

    useEffect(() => {
        // Busca o primeiro usuário (você pode modificar para buscar o usuário logado)
        api.get("http://localhost:3001/usuario")
            .then((response) => {
                if (response.data.length > 0) {
                    setUsuario(response.data[0]) // Pega o primeiro usuário
                }
            })
            .catch(err => console.error("Erro ao buscar usuário:", err))
    }, [])

    return (
        <header>
            <div>
                <img src={Logo} alt="Logo" title="Erradicação da pobreza" />
                <nav>

                    <a href="/home" className="abas">Home</a>

                    <span className='separador'>|</span>

                    <a href="/moradia" className="abas">Moradia</a>

                    <span className='separador'>|</span>

                    <a href="/favoritos" className="abas">Favoritos</a>

                    <span className='separador'>|</span>

                    <a href="/usuario_layout" className="abas">Perfil</a>

                    <span className='separador'>|</span>

                    <a href="/ajuda" className="abas">Ajuda</a>

                </nav>
                
                {usuario && usuario.foto && (
                    <div className="user-profile">
                        <img 
                            src={usuario.foto} 
                            alt={usuario.nome} 
                            className="profile-pic"
                            title={usuario.nome}
                        />
                    </div>
                )}
            </div>
        </header>
    );

}
export default Header;