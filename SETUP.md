# 🚀 Setup do Projeto NobreLar

## 📋 Pré-requisitos

- **Node.js** 18+ 
- **Java** 17+
- **SQL Server** 2019+
- **Maven** 3.6+
- **Git**

## 🗄️ Configuração do Banco de Dados

1. Abra o **SQL Server Management Studio**
2. Execute o script `modelo_fisico_sql_server.sql`
3. Configure a senha no arquivo `application.properties`:
   ```properties
   spring.datasource.password=sua_senha
   ```

## ⚙️ Configuração do Backend

```bash
cd backend/NobreLar/NobreLar
mvn clean install
mvn spring-boot:run
```

**Servidor rodará em:** `http://localhost:8080`

## 🎨 Configuração do Frontend

```bash
npm install
npm run dev
```

**Aplicação rodará em:** `http://localhost:5173`

## 🔧 Variáveis de Ambiente

### Backend (application.properties)
```properties
server.port=8080
spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=TCC
spring.datasource.username=sa
spring.datasource.password=sua_senha
```

### Frontend (src/services/api.js)
```javascript
baseURL: 'http://localhost:8080/api'
```

## 🧪 Testando o Sistema

1. **Backend**: Acesse `http://localhost:8080/api/imoveis`
2. **Frontend**: Acesse `http://localhost:5173`
3. **Cadastre um usuário** em `/usuario`
4. **Faça login** em `/login`
5. **Cadastre imóveis** em `/imovel`

## 📱 Funcionalidades Principais

- ✅ Cadastro e login de usuários
- ✅ CRUD de imóveis
- ✅ Sistema de favoritos
- ✅ Gestão de corretores
- ✅ Registro de locações
- ✅ Página de detalhes dos imóveis

## 🐛 Troubleshooting

### Erro de Conexão com Banco
- Verifique se o SQL Server está rodando
- Confirme a senha no `application.properties`

### Erro CORS
- Backend já configurado com `@CrossOrigin(origins = "*")`

### Porta em Uso
- Backend: Altere `server.port` no `application.properties`
- Frontend: Altere no `vite.config.js`

## 📞 Suporte

Para dúvidas sobre o projeto, consulte a documentação no arquivo `README.md`