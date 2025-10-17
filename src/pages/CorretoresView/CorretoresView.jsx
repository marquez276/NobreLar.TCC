import { useState, useEffect } from "react";
import React from "react";
import api from "../../services/api";

const CorretoresView = () => {
  const [corretores, setCorretores] = useState([]);

  useEffect(() => {
    api.get("/corretores")
      .then(res => setCorretores(res.data))
      .catch(() => console.error("Erro ao buscar corretores"));
  }, []);

  return (
    <div className="app-container">
      <div className="main-content">
        Nossos Corretores
      </div>

      <div className="cards-container">
        {corretores.map(corretor => (
          <div key={corretor.idCorretor} className="corretor-card">
            <div className="corretor-avatar">
              👤
            </div>
            <h3>{corretor.nome}</h3>
            <p><strong>📧 Email:</strong> {corretor.email}</p>
            <p><strong>📱 Telefone:</strong> {corretor.telefone}</p>
            <p><strong>🏠 CRECI:</strong> {corretor.registroCreci}</p>
            <div className="corretor-actions">
              <button className="btn-contato">
                📞 Entrar em Contato
              </button>
            </div>
          </div>
        ))}
      </div>

      {corretores.length === 0 && (
        <div className="no-corretores">
          <p>Nenhum corretor cadastrado ainda.</p>
        </div>
      )}
    </div>
  );
};

export default CorretoresView;