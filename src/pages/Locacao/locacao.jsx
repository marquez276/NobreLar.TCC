import { useState, useEffect } from "react";
import React from "react";
import api from "../../services/api";
import './locacao.css'

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

    const dataToSend = {
      idCompraAluga: parseInt(vidCompraAluga),
      idCliente: parseInt(vidCliente),
      dataTransacao: parseInt(vdataTransacao),
      tipoTransacao: vtipoTransacao,
      nome: vnome,
      email: vemail,
      telefone: parseInt(vtelefone),
      cpfCnpj: parseInt(vcpfCnpj),
      fkImovelIdMovel: parseInt(vfkImovelId)
    };

    try {
      await api.post("/locacoes", dataToSend);
      const res = await api.get("/locacoes");
      setLocacoes(res.data);
      resetForm();
    } catch (err) {
      console.error(err);
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
            <input type="number" value={vdataTransacao} required onChange={(e) => setDataTransacao(e.target.value)} />
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
            <input type="number" value={vtelefone} required onChange={(e) => setTelefone(e.target.value)} />
          </div>

          <div className="form-group">
            <label>CPF/CNPJ</label>
            <input type="number" value={vcpfCnpj} required onChange={(e) => setCpfCnpj(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Imóvel</label>
            <select value={vfkImovelId} required onChange={(e) => setFkImovelId(e.target.value)}>
              <option value="">Selecione o imóvel</option>
              {imoveis.map(imovel => (
                <option key={imovel.idMovel} value={imovel.idMovel}>
                  {imovel.tipo} - {imovel.endereco} - R$ {imovel.valor}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>

      <div className="app-container">
        <div className="main-content">Locações Cadastradas</div>
        <ul>
          {locacoes.map(locacao => (
            <li key={`${locacao.idCompraAluga}-${locacao.idCliente}`}>
              {locacao.nome} - {locacao.email} - {locacao.tipoTransacao} - Data: {locacao.dataTransacao}
              <div>
                <button onClick={() => handleDelete(locacao.idCompraAluga, locacao.idCliente)}>Deletar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Locacao;