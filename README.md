# 🏠 NobreLar - Sistema Imobiliário

Sistema completo de gestão imobiliária desenvolvido como Trabalho de Conclusão de Curso (TCC).

## 🚀 Tecnologias Utilizadas

### Frontend
- **React.js** - Interface de usuário
- **Vite** - Build tool e desenvolvimento
- **React Router** - Navegação
- **Axios** - Requisições HTTP
- **CSS3** - Estilização moderna

### Backend
- **Spring Boot** - Framework Java
- **Spring Data JPA** - Persistência de dados
- **SQL Server** - Banco de dados
- **Maven** - Gerenciamento de dependências

## 📋 Funcionalidades

### 🏡 Gestão de Imóveis
- ✅ Cadastro completo de imóveis
- ✅ Upload de imagens
- ✅ Busca e filtros
- ✅ Página de detalhes
- ✅ Venda e aluguel

### 👥 Sistema de Usuários
- ✅ Cadastro de usuários
- ✅ Login/logout
- ✅ Perfil com foto
- ✅ Autenticação completa

### ⭐ Sistema de Favoritos
- ✅ Adicionar/remover favoritos
- ✅ Lista personalizada por usuário
- ✅ Integração com backend

### 🏢 Gestão de Corretores
- ✅ Cadastro de corretores
- ✅ Registro CREA
- ✅ Informações de contato

### 📊 Transações
- ✅ Registro de vendas/aluguéis
- ✅ Histórico de transações
- ✅ Vinculação cliente-imóvel

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+
- Java 17+
- SQL Server
- Maven

### Backend (Spring Boot)
```bash
cd backend/NobreLar/NobreLar
mvn spring-boot:run
```

### Frontend (React)
```bash
npm install
npm run dev
```

### Banco de Dados
Execute o script `modelo_fisico_sql_server.sql` no SQL Server Management Studio.

## 🌐 Endpoints da API

- `GET/POST/PUT/DELETE /api/imoveis` - Gestão de imóveis
- `GET/POST/PUT/DELETE /api/usuarios` - Gestão de usuários
- `POST /api/usuarios/login` - Autenticação
- `GET/POST/DELETE /api/favoritos` - Sistema de favoritos
- `GET/POST/PUT/DELETE /api/corretores` - Gestão de corretores
- `GET/POST/DELETE /api/locacoes` - Transações

## 📱 Páginas do Sistema

- **Home** - Listagem de imóveis
- **Detalhes** - Informações completas do imóvel
- **Cadastro** - Registro de usuários
- **Login** - Autenticação
- **Favoritos** - Imóveis salvos
- **Imóveis** - Gestão de propriedades
- **Corretores** - Cadastro de profissionais
- **Locações** - Registro de transações
- **Ajuda** - Documentação do sistema

## 🎨 Design

Interface moderna e responsiva com:
- Layout de cards
- Gradientes e sombras
- Animações suaves
- Design mobile-first
- Paleta de cores profissional

## 📊 Banco de Dados

Modelo relacional com 5 tabelas principais:
- **Usuario** - Dados dos usuários
- **Imovel** - Propriedades cadastradas
- **Corretor** - Profissionais do setor
- **Favorito** - Sistema de favoritos
- **Locacao_Cliente** - Transações realizadas

## 🔒 Segurança

- Autenticação de usuários
- Validação de dados
- Proteção de rotas
- Sanitização de inputs

## 📈 Performance

- Índices otimizados no banco
- Lazy loading de componentes
- Cache de dados
- Compressão de imagens

## 🤝 Contribuição

Este é um projeto acadêmico (TCC). Para sugestões ou melhorias, entre em contato.

## 📄 Licença

Projeto desenvolvido para fins acadêmicos.

---

**Desenvolvido para o TCC - Sistema Imobiliário NobreLar**