import { useState, useEffect } from 'react'
import './favoritos.css'

function Favoritos() {
    const [favoritos, setFavoritos] = useState([])

    useEffect(() => {
        const favoritosSalvos = JSON.parse(localStorage.getItem('favoritos') || '[]')
        setFavoritos(favoritosSalvos)
    }, [])

    const removerFavorito = (id) => {
        const novosFavoritos = favoritos.filter(fav => fav.id !== id)
        setFavoritos(novosFavoritos)
        localStorage.setItem('favoritos', JSON.stringify(novosFavoritos))
    }

    return (
        <div className='app-container'>
            <div className="main-content">
                Meus Favoritos
            </div>

            {favoritos.length === 0 ? (
                <div className="sem-favoritos">
                    <p>Você ainda não tem favoritos.</p>
                    <p>Navegue pelas moradias e clique em "Favoritar" para salvá-las aqui!</p>
                </div>
            ) : (
                <div className="cards-container">
                    {favoritos.map((moradia) => (
                        <div key={moradia.id} className="produto-card">
                            {moradia.imagem && (
                                <img src={moradia.imagem} alt={moradia.nome} className="produto-imagem" />
                            )}
                            <h3>{moradia.nome}</h3>
                            <p>R$ {moradia.preco} - {moradia.tipoNegocio || 'Venda'}</p>
                            <p>{moradia.nomedacidade}</p>
                            <p>{moradia.bairro}</p>
                            <p>{moradia.descricao}</p>
                            <div className="acoes-favorito">
                                <div 
                                    className="ver-detalhes" 
                                    onClick={() => window.location.href = `/moradia/${moradia.id}`}
                                    style={{cursor: 'pointer'}}
                                >
                                    Ver detalhes
                                </div>
                                <button 
                                    className="btn-remover-favorito"
                                    onClick={() => removerFavorito(moradia.id)}
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