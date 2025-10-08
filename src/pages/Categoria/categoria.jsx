import api from "axios";
import './categoria.css'

import React, { useState, useEffect } from "react";

const Categoria = () => {

     const [vcat, setCat] = useState([])

     const [vNome, setNome] = useState('')


     useEffect(() => {
          api.get("http://localhost:3001/categoria")
               .then((response) => {
                    setCat(response.data)
                    console.log(response.data)
               })
               .catch(err => console.error("Erro ao Buscar os dados", err))
     }, []);



     const handleSubmit = async () => {

          try {
               const response = await api.post("http://localhost:3001/categoria",
                    { nome: vNome})
               console.log(response.data)
          } catch (error) {
               console.log(error)
          }

     };

     //Função adicionada para deletar produto
     const handleDelete = async (id) => {
          try {
               await api.delete(`http://localhost:3001/categoria/${id}`);
               //Atualiza a lista após deletar
               const res = await api.get("http://localhost:3001/categoria");
               setCat(res.data);
          } catch (error) {
               console.log("Erro ao deletar moradia", error);
          }


     };


     return (

          <div className="app-container">

               <div className="main-content">
                    Cadastro Categoria
               </div>


               <form action="">
                    <div className='form-group'>
                         <label>Nome</label>
                         <input type="text" value={vNome} placeholder="Categoria da sua Casa" required onChange={(e) => setNome(e.target.value)} />
                    </div>

                    
                    <div className='form-group'>
                         <button onClick={handleSubmit}>Cadastrar Produto</button>
                    </div>








               </form>


           

          </div>

     );

}
export default Categoria;