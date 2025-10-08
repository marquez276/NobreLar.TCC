//Comandos de Inicialização
//npx json-server --watch db.json --port 3001
//npm run dev

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";//aqui
import './usuario.css'


const Usuario = () => {
  const [, setUsuario] = useState([]);

  // Estados para os campos do formulário
  const [vnome, setNome] = useState('');
  const [vemail, setEmail] = useState('');
  const [vsenha, setSenha] = useState('');
  const [vstatus, setStatus] = useState('Ativo');
  const [vimagem, setImagem] = useState('');
  const [message, setMessage] = useState('');

  // Carrega os usuários existentes (opcional)
  useEffect(() => {
    axios.get("http://localhost:3001/usuario")
      .then((response) => {
        setUsuario(response.data);
        console.log(response.data);
      })
      .catch(err => {
        console.error("Erro ao buscar os dados:", err);
        // Não bloqueia a renderização se houver erro na API
      });
  }, []);

  // Função para cadastrar usuário
  const handleUsuario = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/usuario", {
        nome: vnome,
        email: vemail,
        senha: vsenha,
        status: vstatus,
        foto: vimagem
      });

      setMessage(" Cadastro realizado com sucesso!");
      console.log("Usuário cadastrado:", response.data);

      // Limpa os campos
      setNome('');
      setEmail('');
      setSenha('');
      setStatus('Ativo');
      setImagem('');
    } catch (error) {
      console.error("Erro ao cadastrar o usuário", error);
      setMessage(" Erro ao cadastrar o usuário.");
    }
  };



  return (
    <div className="app-container">
      <div className="main-content">
        <h2>Cadastro de Usuário</h2>
      </div>

      <form onSubmit={handleUsuario}>
        <div className="form-group">
          <label>Nome Completo</label>
          <input
            type="text" placeholder="Seu nome completo" value={vnome} required onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email" placeholder="Digite seu email" value={vemail} required onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha" value={vsenha} required onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div className="form-group">
                         <label>Imagem do Produto</label>
                         <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                   const file = e.target.files[0];
                                   const reader = new FileReader();
                                   reader.onloadend = () => {
                                        setImagem(reader.result); // Salva a imagem em base64 no estado vimg
                                   };
                                   if (file) {
                                        reader.readAsDataURL(file); // Lê o arquivo selecionado
                                   }
                              }}
                         />
                    </div>

        <div className="form-group">
          <label>Status</label>
          <select value={vstatus} onChange={(e) => setStatus(e.target.value)}>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>
        </div>

        <div className="form-group">
          <button type="submit">Cadastrar</button>
        </div>
      </form>

      {/* Mensagem de retorno */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Usuario;