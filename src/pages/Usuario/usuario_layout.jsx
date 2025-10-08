import api from "axios";
import React, { useState, useEffect } from "react";
import './usuario_layout.css'

function UsuarioLayout() {

     const [vusuario, setUsuario] = useState([])

     useEffect(() => {
          api.get("http://localhost:3001/usuario")
               .then((response) => {
                    setUsuario(response.data)
                    console.log(response.data)
               })
               .catch(err => console.error("Erro ao Buscar os dados", err))
     }, []);




     return (



          <div className='app-container'  >


               <div className="main-content">
                  Seu Perfil 
               </div>

      


<div className="cards-container">
                {vusuario.length > 0 ? (
                    vusuario.map((usuario) => (
                        <div key={usuario.id} className="produto-card">
                            {usuario.foto ? (
                                <img src={usuario.foto} alt={usuario.nome} className="produto-imagem" />
                            ) : (
                                <img src="caminho/para/imagem-padrao.png" alt="Imagem não disponível" className="produto-imagem" />
                            )}
                            <p>{usuario.nome}</p>
                            <p>{usuario.email}</p>
                            <p>{usuario.senha}</p>
                            <p>{usuario.status}</p>
                        </div>
                    ))
                ) : (
                    <p>Nenhum usuário encontrado.</p>
                )}
            </div>
        </div>
    );
}
export default UsuarioLayout;
