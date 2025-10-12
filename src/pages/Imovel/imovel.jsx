import { useState, useEffect } from "react";
import React from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import './imovel.css'

const Imovel = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [imoveis, setImoveis] = useState([]);

  const [vvalor, setValor] = useState("");
  const [vtipo, setTipo] = useState("");
  const [vendereco, setEndereco] = useState("");
  const [vnome, setNome] = useState("");
  const [vdescricao, setDescricao] = useState("");
  const [vcidade, setCidade] = useState("");
  const [vbairro, setBairro] = useState("");
  const [vrua, setRua] = useState("");
  const [vnumero, setNumero] = useState("");
  const [vtelefone, setTelefone] = useState("");
  const [vnomeProprietario, setNomeProprietario] = useState("");
  const [vtipoNegocio, setTipoNegocio] = useState("Venda");
  const [vimagem, setImagem] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    api.get("/imoveis")
      .then(res => setImoveis(res.data))
      .catch(() => console.error("Erro ao buscar imóveis"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      alert('Você precisa fazer login para cadastrar imóveis!')
      navigate('/login')
      return
    }

    const dataToSend = {
      numeroDeCotas: 1,
      valor: parseInt(vvalor),
      tipo: vtipo,
      endereco: vendereco,
      nome: vnome,
      descricao: vdescricao,
      cidade: vcidade,
      bairro: vbairro,
      rua: vrua,
      numero: vnumero,
      telefone: vtelefone,
      nomeProprietario: vnomeProprietario,
      tipoNegocio: vtipoNegocio,
      imagem: vimagem
    };

    try {
      if (isEditing) {
        await api.put(`/imoveis/${editingId}`, dataToSend);
      } else {
        await api.post("/imoveis", dataToSend);
      }

      const res = await api.get("/imoveis");
      setImoveis(res.data);
      resetForm();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (imovel) => {
    setIsEditing(true);
    setEditingId(imovel.idMovel);
    setValor(imovel.valor?.toString() || "");
    setTipo(imovel.tipo || "");
    setEndereco(imovel.endereco || "");
    setNome(imovel.nome || "");
    setDescricao(imovel.descricao || "");
    setCidade(imovel.cidade || "");
    setBairro(imovel.bairro || "");
    setRua(imovel.rua || "");
    setNumero(imovel.numero || "");
    setTelefone(imovel.telefone || "");
    setNomeProprietario(imovel.nomeProprietario || "");
    setTipoNegocio(imovel.tipoNegocio || "Venda");
    setImagem(imovel.imagem || "");
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/imoveis/${id}`);
      const res = await api.get("/imoveis");
      setImoveis(res.data);
    } catch (err) {
      console.error("Erro ao deletar imóvel", err);
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setEditingId(null);
    setValor("");
    setTipo("");
    setEndereco("");
    setNome("");
    setDescricao("");
    setCidade("");
    setBairro("");
    setRua("");
    setNumero("");
    setTelefone("");
    setNomeProprietario("");
    setTipoNegocio("Venda");
    setImagem("");
  };

  return (
    <div className="app-container">
      <div className="main-content">
        {isEditing ? "Editar Imóvel" : "Cadastro Imóvel"}
      </div>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Nome do Imóvel</label>
          <input type="text" value={vnome} required onChange={(e) => setNome(e.target.value)} />
        </div>

        <div className='form-group'>
          <label>Cidade</label>
          <input type="text" value={vcidade} required onChange={(e) => setCidade(e.target.value)} />
        </div>

        <div className='form-group'>
          <label>Bairro</label>
          <input type="text" value={vbairro} required onChange={(e) => setBairro(e.target.value)} />
        </div>

        <div className='form-group'>
          <label>Rua</label>
          <input type="text" value={vrua} required onChange={(e) => setRua(e.target.value)} />
        </div>

        <div className='form-group'>
          <label>Número</label>
          <input type="text" value={vnumero} onChange={(e) => setNumero(e.target.value)} />
        </div>

        <div className='form-group'>
          <label>Descrição</label>
          <input type="text" value={vdescricao} placeholder="Detalhes do imóvel" required onChange={(e) => setDescricao(e.target.value)} />
        </div>

        <div className='form-group'>
          <label>Valor</label>
          <input type="number" value={vvalor} required onChange={(e) => setValor(e.target.value)} />
        </div>

        <div className='form-group'>
          <label>Tipo de Negócio</label>
          <select value={vtipoNegocio} onChange={(e) => setTipoNegocio(e.target.value)}>
            <option value="Venda">Venda</option>
            <option value="Aluguel">Aluguel</option>
          </select>
        </div>

        <div className='form-group'>
          <label>Tipo do Imóvel</label>
          <input type="text" value={vtipo} placeholder="Casa, Apartamento, etc." required onChange={(e) => setTipo(e.target.value)} />
        </div>

        <div className='form-group'>
          <label>Telefone do Proprietário</label>
          <input type="text" value={vtelefone} required onChange={(e) => setTelefone(e.target.value)} />
        </div>

        <div className='form-group'>
          <label>Nome do Proprietário</label>
          <input type="text" value={vnomeProprietario} required onChange={(e) => setNomeProprietario(e.target.value)} />
        </div>



        <div className="form-group">
          <label>Imagem do Imóvel</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onloadend = () => setImagem(reader.result);
              if (file) reader.readAsDataURL(file);
            }}
          />
        </div>

        <div className='form-group'>
          <button type="submit">{isEditing ? "Atualizar" : "Cadastrar"} Imóvel</button>
        </div>

        {isEditing && (
          <div className='form-group'>
            <button type="button" onClick={resetForm}>Cancelar</button>
          </div>
        )}
      </form>

      <div className="main-content">
        Imóveis Cadastrados
      </div>

      <div className="cards-container">
        {imoveis.map(imovel => (
          <div key={imovel.idMovel} className="produto-card">
            {imovel.imagem && (
              <img src={imovel.imagem} alt={imovel.nome} className="produto-imagem" />
            )}
            <h3>{imovel.nome}</h3>
            <p>R$ {imovel.valor} - {imovel.tipoNegocio}</p>
            <p>{imovel.cidade} - {imovel.bairro}</p>
            <p>{imovel.descricao}</p>
            <p>Proprietário: {imovel.nomeProprietario}</p>
            <p>Telefone: {imovel.telefone}</p>
            <div>
              <button onClick={() => handleEdit(imovel)}>Editar</button>
              <button onClick={() => handleDelete(imovel.idMovel)}>Deletar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imovel;