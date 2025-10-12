

//npm install react-hook-form
//npm install axios

//npx json-server --watch db.json --port 3001
//npm run dev




import api from "axios";
import './moradia.css'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

import React, { useState, useEffect } from "react";

const Moradia = () => {
     const { isAuthenticated } = useAuth()
     const navigate = useNavigate()
     const [vmoradia, setMoradia] = useState([])

     // ==================== CAMPOS DO FORMULÁRIO ====================
     const [vNomeC, setNomeC] = useState('')
     const [vBairro, setBairro] = useState('')
     const [vRua, setRua] = useState('')
     const [vDesc, setDesc] = useState('')
     const [vPreco, setPreco] = useState('')
     const [vNum, setNum] = useState('')
     const [vNome, setNome] = useState('')
     const [vNume, setNume] = useState('')
     const [vimg, setImg] = useState('') //imagem
     const [vTipoNegocio, setTipoNegocio] = useState('Venda') // Venda ou Aluguel

     // ==================== EDIÇÃO ====================
     const [isEditing, setIsEditing] = useState(false); // true se estiver editando
     const [editingId, setEditingId] = useState(null);  // id da moradia que está editando

     useEffect(() => {
          api.get("http://localhost:3001/moradia")
               .then((response) => {
                    setMoradia(response.data)
                    console.log(response.data)
               })
               .catch(err => console.error("Erro ao Buscar os dados", err))
     }, []);



     // ==================== CADASTRAR OU ATUALIZAR MORADIA ====================
     const handleSubmit = async (e) => {
          e.preventDefault();
          
          if (!isAuthenticated) {
               alert('Você precisa fazer login para cadastrar moradias!')
               navigate('/login')
               return
          }

          const dataToSend = {
               nomedacidade: vNomeC,
               bairro: vBairro,
               rua: vRua,
               descricao: vDesc,
               preco: vPreco,
               numeros: vNum,
               nome: vNome,
               num: vNume,
               imagem: vimg,
               tipoNegocio: vTipoNegocio
          };

          try {
               if (isEditing) {
                    // ======= INÍCIO DA ATUALIZAÇÃO (EDIÇÃO) =======
                    await api.put(`http://localhost:3001/moradia/${editingId}`, dataToSend);
                    // ======= FIM DA ATUALIZAÇÃO =======
               } else {
                    await api.post("http://localhost:3001/moradia", dataToSend);
               }

               // Atualiza a lista após cadastrar ou editar
               const res = await api.get("http://localhost:3001/moradia");
               setMoradia(res.data);
               resetForm();
          } catch (error) {
               console.error(error);
          }
     };

     // ==================== CARREGAR MORADIA PARA EDIÇÃO ====================
     const handleEdit = (moradia) => {
          setIsEditing(true);
          setEditingId(moradia.id);
          setNomeC(moradia.nomedacidade);
          setBairro(moradia.bairro);
          setRua(moradia.rua);
          setDesc(moradia.descricao);
          setPreco(moradia.preco);
          setNum(moradia.numeros);
          setNome(moradia.nome);
          setNume(moradia.num);
          setImg(moradia.imagem || '');
          setTipoNegocio(moradia.tipoNegocio || 'Venda');
     };

     // ==================== DELETAR MORADIA ====================
     const handleDelete = async (id) => {
          try {
               await api.delete(`http://localhost:3001/moradia/${id}`);
               const res = await api.get("http://localhost:3001/moradia");
               setMoradia(res.data);
          } catch (error) {
               console.error("Erro ao deletar moradia", error);
          }
     };

     // ==================== RESETAR FORMULÁRIO ====================
     const resetForm = () => {
          setIsEditing(false);
          setEditingId(null);
          setNomeC('');
          setBairro('');
          setRua('');
          setDesc('');
          setPreco('');
          setNum('');
          setNome('');
          setNume('');
          setImg('');
          setTipoNegocio('Venda');
     };


     return (

          <div className="app-container">

               <div className="main-content">
                    {isEditing ? "Editar Moradia" : "Cadastro Moradia"}
               </div>


               <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                         <label>Nome da cidade</label>
                         <input type="text" value={vNomeC} placeholder="Cidade onde se localiza" required onChange={(e) => setNomeC(e.target.value)} />
                    </div>

                    <div className='form-group'>
                         <label>Bairro</label>
                         <input type="text" value={vBairro} placeholder="Bairro onde se localiza" required onChange={(e) => setBairro(e.target.value)} />
                    </div>

                    <div className='form-group'>
                         <label>Rua</label>
                         <input type="text" value={vRua} placeholder="Rua da Moradia" required onChange={(e) => setRua(e.target.value)} />
                    </div>

                    <div className='form-group'>
                         <label>Descrição da moradia</label>
                         <input type="text" value={vDesc} placeholder="m², quantidade de cômodos e informações adicionais" required onChange={(e) => setDesc(e.target.value)} />
                    </div>

                    <div className='form-group'>
                         <label>Preço</label>
                         <input type="text" value={vPreco} placeholder="Preço da Casa" required onChange={(e) => setPreco(e.target.value)} />
                    </div>

                    <div className='form-group'>
                         <label>Tipo de Negócio</label>
                         <select value={vTipoNegocio} onChange={(e) => setTipoNegocio(e.target.value)}>
                              <option value="Venda">Venda</option>
                              <option value="Aluguel">Aluguel</option>
                         </select>
                    </div>

                    <div className='form-group'>
                         <label>Número de telefone</label>
                         <input type="text" value={vNum} placeholder="Número do seu aparelho de comunicação" required onChange={(e) => setNum(e.target.value)} />
                    </div>

                    <div className='form-group'>
                         <label>Nome Completo</label>
                         <input type="text" value={vNome} placeholder="Seu nome Completo" required onChange={(e) => setNome(e.target.value)} />
                    </div>

                    <div className='form-group'>
                         <label>Número</label>
                         <input type="text" value={vNume}placeholder="Número da Moradia" onChange={(e) => setNume(e.target.value)} />
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
                                        setImg(reader.result); // Salva a imagem em base64 no estado vimg
                                   };
                                   if (file) {
                                        reader.readAsDataURL(file); // Lê o arquivo selecionado
                                   }
                              }}
                         />
                    </div>



                    <div className='form-group'>
                         <button type="submit">{isEditing ? "Atualizar" : "Cadastrar"} Moradia</button>
                    </div>

                    {isEditing && (
                         <div className='form-group'>
                              <button type="button" onClick={resetForm}>Cancelar</button>
                         </div>
                    )}








               </form>


               <div className="main-content">
                    Cadastro produto
               </div>

               <ul>
                    {vmoradia.map(prod => (
                         <li key={prod.id}>NomeC: {prod.nomedacidade}| Bairro: {prod.bairro}|Rua: {prod.rua}| Descrição: {prod.descricao}| Preco: {prod.preco}| Tipo: {prod.tipoNegocio}|Numero: {prod.numeros}| Nome: {prod.nome}| Numero: {prod.num} | Imagem:{prod.img}

                              <br />
                              <div>
                                   <button onClick={() => handleEdit(prod)}>Editar</button>
                                   <button onClick={() => handleDelete(prod.id)}>Deletar</button>
                              </div>
                         </li>
                    ))}
               </ul>

          </div>

     );

}
export default Moradia;
