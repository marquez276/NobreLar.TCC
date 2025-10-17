import { useState, useEffect } from "react";
import React from "react";
import api from "../../services/api";
import { formatPhone, removePhoneFormat } from '../../utils/formatters';

const Corretor = () => {
  const [corretores, setCorretores] = useState([]);

  const [vnome, setNome] = useState("");
  const [vtelefone, setTelefone] = useState("");
  const [vemail, setEmail] = useState("");
  const [vregistroCreci, setRegistroCreci] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    api.get("/corretores")
      .then(res => setCorretores(res.data))
      .catch(() => console.error("Erro ao buscar corretores"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      nome: vnome,
      telefone: removePhoneFormat(vtelefone),
      email: vemail,
      registroCreci: vregistroCreci.replace(/\D/g, '')
    };

    try {
      if (isEditing) {
        await api.put(`/corretores/${editingId}`, dataToSend);
      } else {
        await api.post("/corretores", dataToSend);
      }

      const res = await api.get("/corretores");
      setCorretores(res.data);
      resetForm();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (corretor) => {
    setIsEditing(true);
    setEditingId(corretor.idCorretor);
    setNome(corretor.nome);
    setTelefone(corretor.telefone.toString());
    setEmail(corretor.email);
    setRegistroCreci(corretor.registroCreci.toString());
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/corretores/${id}`);
      const res = await api.get("/corretores");
      setCorretores(res.data);
    } catch (err) {
      console.error("Erro ao deletar corretor", err);
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setEditingId(null);
    setNome("");
    setTelefone("");
    setEmail("");
    setRegistroCreci("");
  };

  return (
    <div>
      <div className="app-container">
        <div className="main-content">Cadastro de Corretor</div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome</label>
            <input type="text" value={vnome} required onChange={(e) => setNome(e.target.value)} />
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
            <label>Email</label>
            <input type="email" value={vemail} required onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Registro CRECI</label>
            <input type="number" value={vregistroCreci} required onChange={(e) => setRegistroCreci(e.target.value)} />
          </div>

          <div className="form-group">
            <button type="submit">{isEditing ? "Atualizar" : "Cadastrar"}</button>
          </div>

          {isEditing && (
            <div className="form-group">
              <button type="button" onClick={resetForm}>Cancelar</button>
            </div>
          )}
        </form>
      </div>

      <div className="app-container">
        <div className="main-content">Corretores Cadastrados</div>
        <ul>
          {corretores.map(corretor => (
            <li key={corretor.idCorretor}>
              {corretor.nome} - {corretor.email} - {corretor.telefone} - CRECI: {corretor.registroCreci}
              <div>
                <button onClick={() => handleEdit(corretor)}>Editar</button>
                <button onClick={() => handleDelete(corretor.idCorretor)}>Deletar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Corretor;