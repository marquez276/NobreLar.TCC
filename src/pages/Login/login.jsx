//npm install react-hook-form
//npm install axios
//npm install json-server
//npm install -g json-server


//Comandos de Inicialização
//npx json-server --watch db.json --port 3001
//npm run dev


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";//aqui
import './login.css'
import { useAuth } from '../../context/AuthContext'

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [message, setMessage] = useState("");
    const { login } = useAuth()
    const navigate = useNavigate();

    const handlelogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3001/usuario?email=${email}&senha=${senha}`);
            const data = await response.json();

            if (data.length > 0) {
                const userData = data[0]
                login(userData)
                setMessage("Login realizado com sucesso!");
                navigate("/home");
            } else {
                setMessage("Email ou senha inválidos.");
            }
        } catch (error) {
            setMessage("Erro ao conectar com o servidor.")
        }
    };
    return (

        <div className="app-container">
            <div className="main-content">
                Login
            </div>

            <form onSubmit={handlelogin}>
                <div className="form-group" >
                    <label for="email">Email:</label>
                    <input type="email" placeholder="Nome do produto" value={email} required onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group" >
                    <label for="password">Senha:</label>
                    <input type="password" placeholder="Digite sua senha" value={senha} required onChange={(e) => setSenha(e.target.value)} />
                </div>

                <div className="form-group">
                    <button type="Submit">Enviar</button>

                </div>

            </form>

            {message && <p> {message}  </p>}

            <div className="register-link">
                <p>
                    Não tem uma conta?<a href="/usuario">Cadastra-se</a>

                </p>
            </div>



        </div>

    );
}
export default Login;