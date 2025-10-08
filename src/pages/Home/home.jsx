import { Link } from 'react-router-dom'
import Casa from '../img/teste1.jpg'
import './home.css'

import api from "axios";
import React, { useState, useEffect } from "react";

function Home() {

   

     {/*Parte moradia*/ }

     const [vmoradia, setMoradia] = useState([])

     useEffect(() => {
          api.get("http://localhost:3001/moradia")
               .then((response) => {
                    setMoradia(response.data)
                    console.log(response.data)
               })
               .catch(err => console.error("Erro ao Buscar os dados", err))
     }, []);




     return (



          <div className='app-container'  >





               <div className="main-content">
                    Moradias cadastradas
               </div>

<div className="cards-container">
     {vmoradia.map((moradia) => (
<div key={moradia.id} className="produto-card" onClick={() => window.location.href = `/moradia/${moradia.id}`} style={{cursor: 'pointer'}}>
     {moradia.imagem && (
          <img src={moradia.imagem} alt={moradia.nome} className="produto-imagem" />
     )}
     <h3>{moradia.nome}</h3>
     <p>R$ {moradia.preco} - {moradia.tipoNegocio || 'Venda'}</p>
     <p>{moradia.nomedacidade}</p>
     <p>{moradia.bairro}</p>
     <p>{moradia.descricao}</p>
     <div className="ver-detalhes">Clique para ver detalhes</div>
</div>






     ))}

</div>






          </div>


     );
}
export default Home;