import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api from '../../services/api'
import { useAuth } from '../../context/AuthContext'

function MoradiaDetalhes() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [imovel, setImovel] = useState(null)
    const [isFavorito, setIsFavorito] = useState(false)
    const { isAuthenticated, user } = useAuth()

    useEffect(() => {
        api.get(`/imoveis/${id}`)
            .then((response) => {
                setImovel(response.data)
                // Verifica se já está nos favoritos
                if (isAuthenticated && user?.idUsuario) {
                    api.get(`/favoritos/usuario/${user.idUsuario}`)
                        .then(res => {
                            setIsFavorito(res.data.some(fav => fav.idImovel === parseInt(id)))
                        })
                        .catch(err => console.error('Erro ao verificar favoritos', err))
                }
            })
            .catch(err => {
                console.error("Erro ao buscar imóvel:", err)
                navigate('/home')
            })
    }, [id, navigate, isAuthenticated, user])

    const toggleFavorito = async () => {
        if (!isAuthenticated || !user?.idUsuario) {
            alert('Você precisa fazer login para favoritar!')
            navigate('/login')
            return
        }
        
        try {
            if (isFavorito) {
                // Remover dos favoritos
                await api.delete(`/favoritos/usuario/${user.idUsuario}/imovel/${id}`)
                setIsFavorito(false)
            } else {
                // Adicionar aos favoritos
                const favoritoData = {
                    idUsuario: user.idUsuario,
                    idImovel: parseInt(id),
                    dataAdicao: new Date().toISOString().split('T')[0],
                    nomeImovel: imovel.nome,
                    valorImovel: imovel.valor,
                    cidadeImovel: imovel.cidade,
                    imagemImovel: imovel.imagem
                }
                await api.post('/favoritos', favoritoData)
                setIsFavorito(true)
            }
        } catch (err) {
            console.error('Erro ao alterar favorito', err)
        }
    }

    if (!imovel) {
        return (
            <div className="app-container">
                <div className="main-content">Carregando...</div>
            </div>
        )
    }

    return (
        <div className="app-container">
            <div className="main-content">
                🏠 Detalhes do Imóvel
            </div>
            
            <button className="btn" onClick={() => navigate('/home')}>
                ← Voltar
            </button>
            
            <div className="produto-card">
                {imovel.imagem && (
                    <img src={imovel.imagem} alt={imovel.nome} className="produto-imagem" />
                )}
                
                <h3>{imovel.nome}</h3>
                <p>R$ {imovel.valor}</p>
                <p><strong>Tipo:</strong> {imovel.tipoNegocio || 'Venda'}</p>
                
                <p><strong>Cidade:</strong> {imovel.cidade}</p>
                <p><strong>Bairro:</strong> {imovel.bairro}</p>
                <p><strong>Rua:</strong> {imovel.rua}</p>
                <p><strong>Número:</strong> {imovel.numero}</p>
                <p><strong>Tipo:</strong> {imovel.tipo}</p>
                
                <p><strong>Descrição:</strong> {imovel.descricao}</p>
                
                <p><strong>Proprietário:</strong> {imovel.nomeProprietario}</p>
                <p><strong>Telefone:</strong> {imovel.telefone}</p>
                
                <div className="acoes-imovel">
                    <button 
                        className="btn"
                        onClick={() => {
                            if (!isAuthenticated) {
                                alert('Você precisa se cadastrar para entrar em contato!')
                                navigate('/usuario')
                            } else {
                                alert(`Entre em contato com ${imovel.nomeProprietario} pelo telefone: ${imovel.telefone}`)
                            }
                        }}
                    >
                        📞 Entrar em Contato
                    </button>
                    <button 
                        className={`btn-favoritar ${isFavorito ? 'favorito-ativo' : ''}`}
                        onClick={toggleFavorito}
                    >
                        {isFavorito ? '❤️ Favoritado' : '🤍 Favoritar'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MoradiaDetalhes