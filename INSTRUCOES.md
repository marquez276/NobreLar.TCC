# NobreLar - Instruções de Uso

## Configuração do Sistema

### Backend (Spring Boot)
1. Certifique-se de que o SQL Server está rodando na porta 1433
2. Configure a senha do banco no arquivo `application.properties`
3. Execute o backend Spring Boot na pasta `backend/NobreLar/NobreLar`:
   ```
   mvn spring-boot:run
   ```
   O backend rodará na porta 8080

### Frontend (React)
1. Instale as dependências:
   ```
   npm install
   ```

2. Para compatibilidade com dados antigos, inicie o JSON server:
   ```
   npx json-server --watch db.json --port 3001
   ```

3. Inicie o frontend:
   ```
   npm run dev
   ```

## Funcionalidades Implementadas

### Páginas Conectadas ao Backend Spring Boot:
- **Imóveis** (`/imovel`) - CRUD completo com campos expandidos (nome, cidade, bairro, rua, descrição, valor, tipo de negócio, proprietário, telefone, imagem)
- **Corretores** (`/corretor`) - Gerencia corretores com nome, telefone, email, CREA
- **Locações** (`/locacao`) - Registra transações de venda/aluguel vinculando clientes a imóveis
- **Usuários** - API `/api/usuarios` com login integrado
- **Favoritos** (`/favoritos`) - Sistema completo de favoritos vinculado ao usuário logado
- **Home** - Exibe imóveis do backend com layout de cards

### Páginas de Compatibilidade:
- **Moradia** - Mantém JSON server para dados antigos
- **Produto** - Continua usando JSON server

## Estrutura das APIs

### Imóveis
- GET `/api/imoveis` - Lista todos os imóveis
- POST `/api/imoveis` - Cria novo imóvel (campos: nome, cidade, bairro, rua, numero, descricao, valor, tipo, tipoNegocio, telefone, nomeProprietario, numeroDeCotas, imagem)
- PUT `/api/imoveis/{id}` - Atualiza imóvel
- DELETE `/api/imoveis/{id}` - Remove imóvel

### Corretores
- GET `/api/corretores` - Lista todos os corretores
- POST `/api/corretores` - Cria novo corretor
- PUT `/api/corretores/{id}` - Atualiza corretor
- DELETE `/api/corretores/{id}` - Remove corretor

### Locações
- GET `/api/locacoes` - Lista todas as locações
- POST `/api/locacoes` - Cria nova locação
- DELETE `/api/locacoes/{idCompra}/{idCliente}` - Remove locação

### Usuários
- GET `/api/usuarios` - Lista todos os usuários
- POST `/api/usuarios` - Cria novo usuário
- POST `/api/usuarios/login` - Autentica usuário
- PUT `/api/usuarios/{id}` - Atualiza usuário
- DELETE `/api/usuarios/{id}` - Remove usuário

### Favoritos
- GET `/api/favoritos` - Lista todos os favoritos
- GET `/api/favoritos/usuario/{idUsuario}` - Lista favoritos de um usuário
- POST `/api/favoritos` - Adiciona imóvel aos favoritos
- DELETE `/api/favoritos/{id}` - Remove favorito
- DELETE `/api/favoritos/usuario/{idUsuario}/imovel/{idImovel}` - Remove favorito específico

## Navegação

O header foi atualizado com links para:
- Home (imóveis do backend)
- Imóveis (CRUD completo)
- Corretores (gerenciamento)
- Locações (transações)
- Favoritos
- Perfil
- Ajuda (atualizada com informações do sistema)

## Observações

- **Backend expandido** com modelos completos (Imovel, Usuario, Corretor, LocacaoCliente)
- **Frontend unificado** focando no backend Spring Boot
- **Layout de cards** para melhor visualização dos imóveis
- **Upload de imagens** funcionando com base64
- **Sistema de autenticação** integrado ao backend
- **Página de Ajuda** atualizada com informações do sistema atual
- **Compatibilidade mantida** com dados antigos quando necessário