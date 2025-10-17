import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import api from '../../services/api'

function Favoritos() {
    const [favoritos, setFavoritos] = useState([])
    const { isAuthenticated, user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated && user?.idUsuario) {
            api.get(`/favoritos/usuario/${user.idUsuario}`)
                .then(res => setFavoritos(res.data))
                .catch(err => console.error('Erro ao buscar favoritos', err))
        }
    }, [isAuthenticated, user])

    const removerFavorito = async (idFavorito) => {
        try {
            await api.delete(`/favoritos/${idFavorito}`)
            const res = await api.get(`/favoritos/usuario/${user.idUsuario}`)
            setFavoritos(res.data)
        } catch (err) {
            console.error('Erro ao remover favorito', err)
        }
    }



    return (
        <div className='app-container'>
            <div className="favoritos-header">
                <h1>💖 Meus Favoritos</h1>
                <p>Seus imóveis salvos estão aqui!</p>
            </div>

            {!isAuthenticated ? (
                <div className="sem-login">
                    <p>Você não está logado, caso não tem um login, aperte no ícone do boneco acima e cadastre-se</p>
                </div>
            ) : favoritos.length === 0 ? (
                <div className="favoritos-empty">
                    <p>Você ainda não tem favoritos.</p>
                    <p>Navegue pelos imóveis na página Home e adicione aos favoritos!</p>
                </div>
            ) : (
                <div className="cards-container">
                    {favoritos.map((favorito) => (
                        <div key={favorito.idFavorito} className="favorito-card">
                            {favorito.imagemImovel && (
                                <img src={favorito.imagemImovel} alt={favorito.nomeImovel} className="produto-imagem" />
                            )}
                            <h3>{favorito.nomeImovel}</h3>
                            <p>R$ {favorito.valorImovel}</p>
                            <p>{favorito.cidadeImovel}</p>
                            <p>Adicionado em: {favorito.dataAdicao}</p>
                            <div className="favorito-actions">
                                <button 
                                    className="btn-ver-detalhes-favorito"
                                    onClick={() => navigate(`/moradia/${favorito.idImovel}`)}
                                >
                                    👁️ Ver Detalhes
                                </button>
                                <button 
                                    className="btn-remover-favorito"
                                    onClick={() => removerFavorito(favorito.idFavorito)}
                                >
                                    ❌ Remover
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Favoritos