import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api from 'axios'
import './moradiaDetalhes.css'

function MoradiaDetalhes() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [moradia, setMoradia] = useState(null)

    useEffect(() => {
        api.get(`http://localhost:3001/moradia/${id}`)
            .then((response) => {
                setMoradia(response.data)
            })
            .catch(err => {
                console.error("Erro ao buscar moradia:", err)
                navigate('/home')
            })
    }, [id, navigate])

    if (!moradia) {
        return <div className="loading">Carregando...</div>
    }

    return (
        <div className="detalhes-container">
            <button className="btn-voltar" onClick={() => navigate('/home')}>
                ← Voltar
            </button>
            
            <div className="moradia-detalhes">
                <div className="imagem-container">
                    {moradia.imagem && (
                        <img src={moradia.imagem} alt={moradia.nome} className="imagem-principal" />
                    )}
                </div>
                
                <div className="info-container">
                    <h1>{moradia.nome}</h1>
                    <div className="preco-tipo">
                        <span className="preco">R$ {moradia.preco}</span>
                        <span className="tipo">{moradia.tipoNegocio || 'Venda'}</span>
                    </div>
                    
                    <div className="localizacao">
                        <h3>📍 Localização</h3>
                        <p><strong>Cidade:</strong> {moradia.nomedacidade}</p>
                        <p><strong>Bairro:</strong> {moradia.bairro}</p>
                        <p><strong>Rua:</strong> {moradia.rua}</p>
                        <p><strong>Número:</strong> {moradia.num}</p>
                    </div>
                    
                    <div className="descricao">
                        <h3>📋 Descrição</h3>
                        <p>{moradia.descricao}</p>
                    </div>
                    
                    <div className="contato">
                        <h3>📞 Contato</h3>
                        <p><strong>Proprietário:</strong> {moradia.nome}</p>
                        <p><strong>Telefone:</strong> {moradia.numeros}</p>
                    </div>
                    
                    <div className="acoes">
                        <button className="btn-contato">Entrar em Contato</button>
                        <button className="btn-favoritar">❤️ Favoritar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoradiaDetalhes