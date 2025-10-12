import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api from '../../services/api'
import './moradiaDetalhes.css'
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
        return <div className="loading">Carregando...</div>
    }

    return (
        <div className="detalhes-container">
            <button className="btn-voltar" onClick={() => navigate('/home')}>
                ← Voltar
            </button>
            
            <div className="moradia-detalhes">
                <div className="imagem-container">
                    {imovel.imagem && (
                        <img src={imovel.imagem} alt={imovel.nome} className="imagem-principal" />
                    )}
                </div>
                
                <div className="info-container">
                    <h1>{imovel.nome}</h1>
                    <div className="preco-tipo">
                        <span className="preco">R$ {imovel.valor}</span>
                        <span className="tipo">{imovel.tipoNegocio || 'Venda'}</span>
                    </div>
                    
                    <div className="localizacao">
                        <h3>📍 Localização</h3>
                        <p><strong>Cidade:</strong> {imovel.cidade}</p>
                        <p><strong>Bairro:</strong> {imovel.bairro}</p>
                        <p><strong>Rua:</strong> {imovel.rua}</p>
                        <p><strong>Número:</strong> {imovel.numero}</p>
                        <p><strong>Tipo:</strong> {imovel.tipo}</p>
                    </div>
                    
                    <div className="descricao">
                        <h3>📋 Descrição</h3>
                        <p>{imovel.descricao}</p>
                    </div>
                    
                    <div className="contato">
                        <h3>📞 Contato</h3>
                        <p><strong>Proprietário:</strong> {imovel.nomeProprietario}</p>
                        <p><strong>Telefone:</strong> {imovel.telefone}</p>
                    </div>
                    
                    <div className="acoes">
                        <button 
                            className="btn-contato"
                            onClick={() => {
                                if (!isAuthenticated) {
                                    alert('Você precisa se cadastrar para entrar em contato!')
                                    navigate('/usuario')
                                } else {
                                    alert(`Entre em contato com ${imovel.nomeProprietario} pelo telefone: ${imovel.telefone}`)
                                }
                            }}
                        >
                            Entrar em Contato
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
        </div>
    )
}

export default MoradiaDetalhes