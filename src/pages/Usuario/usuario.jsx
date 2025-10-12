//Comandos de Inicialização
//npx json-server --watch db.json --port 3001
//npm run dev

import axios from "axios";
import api from "../../services/api";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './usuario.css'


const Usuario = () => {
  const [, setUsuario] = useState([]);

  const navigate = useNavigate();

  // Estados para os campos do formulário
  const [vnome, setNome] = useState('');
  const [vemail, setEmail] = useState('');
  const [vsenha, setSenha] = useState('');
  const [vtelefone, setTelefone] = useState('');
  const [vcpf, setCpf] = useState('');
  const [vdataNascimento, setDataNascimento] = useState('');
  const [vstatus, setStatus] = useState('Ativo');
  const [vimagem, setImagem] = useState('');
  const [message, setMessage] = useState('');



  // Função para cadastrar usuário
  const handleUsuario = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/usuarios", {
        nome: vnome,
        email: vemail,
        senha: vsenha,
        telefone: vtelefone,
        cpf: vcpf,
        dataNascimento: vdataNascimento,
        status: vstatus,
        foto: vimagem
      });

      setMessage("Cadastro realizado com sucesso!");
      console.log("Usuário cadastrado:", response.data);

      // Redireciona para login após cadastro
      setTimeout(() => {
        navigate('/login');
      }, 2000);

      // Limpa os campos
      resetForm();
    } catch (error) {
      console.error("Erro ao cadastrar o usuário", error);
      setMessage("Erro ao cadastrar o usuário.");
    }
  };

  const resetForm = () => {
    setNome('');
    setEmail('');
    setSenha('');
    setTelefone('');
    setCpf('');
    setDataNascimento('');
    setStatus('Ativo');
    setImagem('');
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
          <label>Telefone</label>
          <input
            type="text"
            placeholder="(11) 99999-9999" value={vtelefone} onChange={(e) => setTelefone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>CPF</label>
          <input
            type="text"
            placeholder="000.000.000-00" value={vcpf} onChange={(e) => setCpf(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Data de Nascimento</label>
          <input
            type="date" value={vdataNascimento} onChange={(e) => setDataNascimento(e.target.value)}
          />
        </div>

        <div className="form-group">
                         <label>Foto de Perfil</label>
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