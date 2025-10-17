import { useState, useEffect } from "react";
import React from "react";
import api from "../../services/api";
import { formatPhone, formatCPFCNPJ, removePhoneFormat, removeCPFCNPJFormat } from '../../utils/formatters';

const Locacao = () => {
  const [locacoes, setLocacoes] = useState([]);
  const [imoveis, setImoveis] = useState([]);

  const [vidCompraAluga, setIdCompraAluga] = useState("");
  const [vidCliente, setIdCliente] = useState("");
  const [vdataTransacao, setDataTransacao] = useState("");
  const [vtipoTransacao, setTipoTransacao] = useState("Aluguel");
  const [vnome, setNome] = useState("");
  const [vemail, setEmail] = useState("");
  const [vtelefone, setTelefone] = useState("");
  const [vcpfCnpj, setCpfCnpj] = useState("");
  const [vfkImovelId, setFkImovelId] = useState("");

  useEffect(() => {
    api.get("/locacoes")
      .then(res => setLocacoes(res.data))
      .catch(() => console.error("Erro ao buscar locações"));
  }, []);

  useEffect(() => {
    api.get("/imoveis")
      .then(res => setImoveis(res.data))
      .catch(() => console.error("Erro ao buscar imóveis"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Converter data para formato numérico (YYYYMMDD)
    const dataFormatada = vdataTransacao.replace(/-/g, '');

    // Verificar se é um imóvel cadastrado (número) ou tipo (string)
    const imovelId = isNaN(Number(vfkImovelId)) ? null : Number(vfkImovelId);

    const dataToSend = {
      idCompraAluga: Number(vidCompraAluga),
      idCliente: Number(vidCliente),
      dataTransacao: Number(dataFormatada),
      tipoTransacao: vtipoTransacao,
      nome: vnome,
      email: vemail,
      telefone: removePhoneFormat(vtelefone),
      cpfCnpj: removeCPFCNPJFormat(vcpfCnpj),
      fkImovelIdMovel: imovelId || 1
    };

    console.log('Dados enviados:', dataToSend); // Para debug

    try {
      await api.post("/locacoes", dataToSend);
      const res = await api.get("/locacoes");
      setLocacoes(res.data);
      resetForm();
      alert('Locação cadastrada com sucesso!');
    } catch (err) {
      console.error('Erro ao cadastrar locação:', err);
      console.error('Resposta do servidor:', err.response?.data);
      alert(`Erro ao cadastrar locação: ${err.response?.data?.message || 'Verifique os dados.'}`); 
    }
  };

  const handleDelete = async (idCompra, idCliente) => {
    try {
      await api.delete(`/locacoes/${idCompra}/${idCliente}`);
      const res = await api.get("/locacoes");
      setLocacoes(res.data);
    } catch (err) {
      console.error("Erro ao deletar locação", err);
    }
  };

  const resetForm = () => {
    setIdCompraAluga("");
    setIdCliente("");
    setDataTransacao("");
    setTipoTransacao("Aluguel");
    setNome("");
    setEmail("");
    setTelefone("");
    setCpfCnpj("");
    setFkImovelId("");
  };

  return (
    <div>
      <div className="app-container">
        <div className="main-content">Cadastro de Locação/Cliente</div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>ID Compra/Aluga</label>
            <input type="number" value={vidCompraAluga} required onChange={(e) => setIdCompraAluga(e.target.value)} />
          </div>

          <div className="form-group">
            <label>ID Cliente</label>
            <input type="number" value={vidCliente} required onChange={(e) => setIdCliente(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Data Transação</label>
            <input type="date" value={vdataTransacao} required onChange={(e) => setDataTransacao(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Tipo Transação</label>
            <select value={vtipoTransacao} onChange={(e) => setTipoTransacao(e.target.value)}>
              <option value="Aluguel">Aluguel</option>
              <option value="Compra">Compra</option>
            </select>
          </div>

          <div className="form-group">
            <label>Nome</label>
            <input type="text" value={vnome} required onChange={(e) => setNome(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" value={vemail} required onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Telefone</label>
            <input 
              type="tel" 
              value={vtelefone} 
              placeholder="(11) 99999-9999" 
              required 
              onChange={(e) => setTelefone(formatPhone(e.target.value))} 
            />
          </div>

          <div className="form-group">
            <label>CPF/CNPJ</label>
            <input 
              type="text" 
              value={vcpfCnpj} 
              placeholder="000.000.000-00 ou 00.000.000/0000-00" 
              required 
              onChange={(e) => setCpfCnpj(formatCPFCNPJ(e.target.value))} 
            />
          </div>

          <div className="form-group">
            <label>Imóvel</label>
            <select value={vfkImovelId} required onChange={(e) => setFkImovelId(e.target.value)}>
              <option value="">Selecione um imóvel</option>
              
              {/* Opções de tipos de imóveis principais - usando IDs fictícios */}
              <optgroup label="Tipos de Imóveis">
                <option value="101">🏠 Casa</option>
                <option value="102">🏢 Apartamento</option>
                <option value="103">🏙️ Cobertura</option>
                <option value="104">🏘️ Duplex</option>
                <option value="105">🏗️ Triplex</option>
                <option value="106">🏠 Studio</option>
                <option value="107">🏭 Loft</option>
                <option value="108">🏨 Flat</option>
                <option value="109">🏪 Comercial</option>
                <option value="110">🌱 Terreno</option>
              </optgroup>
              
              {/* Imóveis cadastrados no sistema */}
              {imoveis.length > 0 && (
                <optgroup label="Imóveis Cadastrados">
                  {imoveis.map(imovel => (
                    <option key={imovel.idMovel} value={imovel.idMovel}>
                      {imovel.nome || imovel.tipo} - {imovel.cidade} - R$ {imovel.valor}
                    </option>
                  ))}
                </optgroup>
              )}
            </select>
          </div>

          <div className="form-group">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>

      <div className="app-container">
        <div className="main-content">Locações Cadastradas</div>
        <div className="cards-container">
          {locacoes.map(locacao => (
            <div key={`${locacao.idCompraAluga}-${locacao.idCliente}`} className="locacao-card">
              <h3>{locacao.nome}</h3>
              <p><strong>Email:</strong> {locacao.email}</p>
              <p><strong>Tipo:</strong> {locacao.tipoTransacao}</p>
              <p><strong>Data:</strong> {locacao.dataTransacao}</p>
              <p><strong>Telefone:</strong> {locacao.telefone}</p>
              <div className="acoes-locacao">
                <button 
                  className="btn-deletar"
                  onClick={() => handleDelete(locacao.idCompraAluga, locacao.idCliente)}
                >
                  🗑️ Deletar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locacao;