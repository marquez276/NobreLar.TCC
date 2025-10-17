import { Link } from 'react-router-dom'
import Logo from '../img/Logo.jpg'
import { useState, useEffect } from 'react'
import api from 'axios'
import { useAuth } from '../../context/AuthContext'

function Header() {
    const { user, isAuthenticated, logout } = useAuth()
    const [showDropdown, setShowDropdown] = useState(false)
    const [showAdminMenu, setShowAdminMenu] = useState(false)

    return (
        <header>
            <div>
                <img src={Logo} alt="Logo" title="Erradicação da pobreza" className="logo" />
                <nav>

                    <a href="/home" className="abas">Home</a>

                    <span className='separador'>|</span>

                    <a href="/corretores" className="abas">Corretores</a>

                    <span className='separador'>|</span>

                   <a href="/favoritos" className="abas">Favoritos</a>

                    <span className='separador'>|</span>

                    <a href="/ajuda" className="abas">Ajuda</a>

                </nav>
                
                <div className="header-actions">
                    <div 
                        className="admin-menu-container"
                        onClick={() => setShowAdminMenu(!showAdminMenu)}
                    >
                        <div className="hamburger-icon">☰</div>
                        
                        {showAdminMenu && (
                            <div className="dropdown-menu admin-dropdown">
                                <Link to="/imovel" className="dropdown-item">
                                    🏠 Imóveis
                                </Link>
                                {isAuthenticated && (
                                    <>
                                        <Link to="/corretor" className="dropdown-item">
                                            👥 Profissionais
                                        </Link>
                                        <Link to="/locacao" className="dropdown-item">
                                            💼 Transações
                                        </Link>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                    
                    <div className="user-profile">
                    <div 
                        className="profile-container"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        {user && user.foto ? (
                            <img 
                                src={user.foto} 
                                alt={user.nome} 
                                className="profile-pic"
                            />
                        ) : (
                            <div className="profile-icon">👤</div>
                        )}
                        
                        {showDropdown && (
                            <div className="dropdown-menu">
                                {isAuthenticated ? (
                                    <>
                                        <Link to="/usuario_layout" className="dropdown-item">
                                            👤 Perfil
                                        </Link>
                                        <span className="user-name">{user?.nome}</span>
                                        <button onClick={logout} className="dropdown-item">
                                            Sair da conta
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/login" className="dropdown-item">
                                            Fazer Login
                                        </Link>
                                        <Link to="/usuario" className="dropdown-item">
                                            Cadastrar
                                        </Link>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                </div>
            </div>
        </header>
    );

}
export default Header;