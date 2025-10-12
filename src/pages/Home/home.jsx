
import './home.css'

import api from "../../services/api";
import { useAuth } from '../../context/AuthContext';
import React, { useState, useEffect } from "react";

function Home() {

     const [vimoveis, setImoveis] = useState([])
     const { isAuthenticated, user } = useAuth()

     useEffect(() => {
          api.get("/imoveis")
               .then((response) => {
                    setImoveis(response.data)
               })
               .catch(err => console.error("Erro ao Buscar os imóveis", err))
     }, []);

     const adicionarFavorito = async (imovel) => {
          if (!isAuthenticated || !user?.idUsuario) {
               alert('Faça login para adicionar favoritos!')
               return
          }

          const favoritoData = {
               idUsuario: user.idUsuario,
               idImovel: imovel.idMovel,
               dataAdicao: new Date().toISOString().split('T')[0],
               nomeImovel: imovel.nome,
               valorImovel: imovel.valor,
               cidadeImovel: imovel.cidade,
               imagemImovel: imovel.imagem
          }

          try {
               await api.post('/favoritos', favoritoData)
               alert('Imóvel adicionado aos favoritos!')
          } catch (err) {
               console.error('Erro ao adicionar favorito', err)
               alert('Erro ao adicionar favorito')
          }
     }




     return (



          <div className='app-container'  >





               <div className="main-content">
                    Moradias cadastradas
               </div>

<div className="cards-container">
     {vimoveis.map((imovel) => (
          <div key={imovel.idMovel} className="produto-card">
               {imovel.imagem && (
                    <img src={imovel.imagem} alt={imovel.nome} className="produto-imagem" />
               )}
               <h3>{imovel.nome}</h3>
               <p>R$ {imovel.valor} - {imovel.tipoNegocio}</p>
               <p>{imovel.cidade} - {imovel.bairro}</p>
               <p>{imovel.descricao}</p>
               <p>Proprietário: {imovel.nomeProprietario}</p>
               <div className="acoes-imovel">
                    <button 
                         className="btn-favoritar"
                         onClick={() => adicionarFavorito(imovel)}
                    >
                         ⭐ Favoritar
                    </button>
                    <button 
                         className="btn-detalhes"
                         onClick={() => window.location.href = `/moradia/${imovel.idMovel}`}
                    >
                         🔍 Ver Detalhes
                    </button>
               </div>
          </div>
     ))}
</div>






          </div>


     );
}
export default Home;