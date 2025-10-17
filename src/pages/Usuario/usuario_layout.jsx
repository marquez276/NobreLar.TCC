import api from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

function UsuarioLayout() {
     const { user, isAuthenticated } = useAuth()
     const navigate = useNavigate()

     if (!isAuthenticated || !user) {
          return (
               <div className='app-container'>
                    <div className="main-content">
                         Perfil do Usuário
                    </div>
                    <div className="sem-login">
                         <p>Você não está logado, caso não tem um login, aperte no ícone do boneco acima e cadastre-se</p>
                    </div>
               </div>
          )
     }




     return (



          <div className='app-container'  >


               <div className="main-content">
                  Seu Perfil 
               </div>

      


<div className="cards-container">
                <div className="produto-card">
                    {user.foto ? (
                        <img src={user.foto} alt={user.nome} className="produto-imagem" />
                    ) : (
                        <div className="sem-foto">📷</div>
                    )}
                    <h3>{user.nome}</h3>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Senha:</strong> {user.senha}</p>
                    <p><strong>Status:</strong> {user.status || 'Ativo'}</p>
                </div>
            </div>
        </div>
    );
}
export default UsuarioLayout;
