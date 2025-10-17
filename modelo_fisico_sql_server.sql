-- =============================================
-- MODELO FÍSICO - SISTEMA NOBRELAR
-- Banco de Dados: SQL Server
-- Versão: 2.0 - Sistema Integrado Frontend/Backend
-- Data: $(Get-Date -Format "yyyy-MM-dd")
-- =============================================

-- Criação do banco de dados
CREATE DATABASE TCC;
GO

USE TCC;
GO

-- =============================================
-- TABELA: Usuario
-- =============================================
CREATE TABLE Usuario (
    ID_Usuario INT IDENTITY(1,1) PRIMARY KEY,
    Nome NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) UNIQUE NOT NULL,
    Senha NVARCHAR(255) NOT NULL,
    Telefone NVARCHAR(20),
    CPF NVARCHAR(14),
    Data_Nascimento NVARCHAR(50),
    Foto NTEXT,
    Status NVARCHAR(20) DEFAULT 'Ativo'
);

-- =============================================
-- TABELA: Corretor
-- =============================================
CREATE TABLE Corretor (
    ID_Corretor INT PRIMARY KEY,
    Nome NVARCHAR(20),
    Telefone INT,
    Email NVARCHAR(100),
    Registro_CREA INT
);

-- =============================================
-- TABELA: Imóvel
-- =============================================
CREATE TABLE Imóvel (
    ID_Movel INT IDENTITY(1,1) PRIMARY KEY,
    Numero_de_Cotas INT,
    Valor INT,
    Tipo NVARCHAR(50),
    Endereco NVARCHAR(200),
    Nome NVARCHAR(100),
    Descricao NVARCHAR(500),
    Cidade NVARCHAR(100),
    Bairro NVARCHAR(100),
    Rua NVARCHAR(100),
    Numero NVARCHAR(50),
    Telefone NVARCHAR(20),
    Nome_Proprietario NVARCHAR(100),
    Tipo_Negocio NVARCHAR(20),
    Imagem NTEXT,
    Status NVARCHAR(20) DEFAULT 'Ativo'
);

-- =============================================
-- TABELA: Locacao_Cliente
-- =============================================
CREATE TABLE Locacao_Cliente (
    ID_Compra_Aluga INT,
    ID_Cliente INT,
    Data_Transacao INT,
    Tipo_Transacao NVARCHAR(20),
    Nome NVARCHAR(100),
    Email NVARCHAR(100),
    Telefone BIGINT,
    CPF_CNPJ BIGINT,
    fk_Imóvel_3_ID_Movel INT,
    PRIMARY KEY (ID_Compra_Aluga, ID_Cliente),
    FOREIGN KEY (fk_Imóvel_3_ID_Movel) REFERENCES Imóvel(ID_Movel)
);

-- =============================================
-- TABELA: Favorito
-- =============================================
CREATE TABLE Favorito (
    ID_Favorito INT IDENTITY(1,1) PRIMARY KEY,
    ID_Usuario INT NOT NULL,
    ID_Imovel INT NOT NULL,
    Data_Adicao NVARCHAR(50),
    Nome_Imovel NVARCHAR(100),
    Valor_Imovel INT,
    Cidade_Imovel NVARCHAR(100),
    Imagem_Imovel NTEXT,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuario(ID_Usuario),
    FOREIGN KEY (ID_Imovel) REFERENCES Imóvel(ID_Movel)
);

-- =============================================
-- ÍNDICES PARA PERFORMANCE
-- =============================================

-- Índices para Usuario
CREATE INDEX IX_Usuario_Email ON Usuario(Email);

-- Índices para Favorito
CREATE INDEX IX_Favorito_Usuario ON Favorito(ID_Usuario);
CREATE INDEX IX_Favorito_Imovel ON Favorito(ID_Imovel);

-- Índices para Imóvel
CREATE INDEX IX_Imovel_Cidade ON Imóvel(Cidade);
CREATE INDEX IX_Imovel_Tipo_Negocio ON Imóvel(Tipo_Negocio);
CREATE INDEX IX_Imovel_Status ON Imóvel(Status);

-- =============================================
-- DADOS DE EXEMPLO (OPCIONAL)
-- =============================================

-- Inserir usuário administrador
INSERT INTO Usuario (Nome, Email, Senha, Telefone, CPF, Status) 
VALUES ('Administrador', 'admin@nobrelar.com', '123456', '11999999999', '000.000.000-00', 'Ativo');

-- Inserir usuário de teste
INSERT INTO Usuario (Nome, Email, Senha, Telefone, CPF, Data_Nascimento, Status) 
VALUES ('João Silva', 'joao@teste.com', '123456', '11988888888', '123.456.789-00', '1990-01-01', 'Ativo');

-- Inserir corretor de exemplo
INSERT INTO Corretor (ID_Corretor, Nome, Telefone, Email, Registro_CREA) 
VALUES (1, 'Carlos Corretor', 1199999999, 'carlos@corretor.com', 123456);

-- Inserir imóveis de exemplo
INSERT INTO Imóvel (Nome, Cidade, Bairro, Rua, Numero, Descricao, Valor, Tipo, Tipo_Negocio, Nome_Proprietario, Telefone, Numero_de_Cotas, Status)
VALUES 
('Casa Moderna', 'São Paulo', 'Vila Madalena', 'Rua das Flores', '123', 'Casa com 3 quartos, 2 banheiros, garagem para 2 carros', 450000, 'Casa', 'Venda', 'Maria Santos', '11988888888', 1, 'Ativo'),
('Apartamento Centro', 'São Paulo', 'Centro', 'Av. Paulista', '1000', 'Apartamento 2 quartos, 1 banheiro, próximo ao metrô', 2500, 'Apartamento', 'Aluguel', 'Pedro Oliveira', '11977777777', 1, 'Ativo'),
('Casa de Campo', 'Atibaia', 'Centro', 'Rua da Montanha', '456', 'Casa de campo com piscina, 4 quartos, área gourmet', 650000, 'Casa', 'Venda', 'Ana Costa', '11966666666', 1, 'Ativo');

-- Inserir exemplo de locação
INSERT INTO Locacao_Cliente (ID_Compra_Aluga, ID_Cliente, Data_Transacao, Tipo_Transacao, Nome, Email, Telefone, CPF_CNPJ, fk_Imóvel_3_ID_Movel)
VALUES (1, 1, 20241201, 'Aluguel', 'João Silva', 'joao@teste.com', 1198888888, 12345678900, 2);

-- Inserir exemplo de favorito
INSERT INTO Favorito (ID_Usuario, ID_Imovel, Data_Adicao, Nome_Imovel, Valor_Imovel, Cidade_Imovel)
VALUES (2, 1, '2024-12-01', 'Casa Moderna', 450000, 'São Paulo');

-- =============================================
-- VIEWS PARA RELATÓRIOS
-- =============================================

-- View para imóveis com informações completas
CREATE VIEW vw_Imoveis_Completo AS
SELECT 
    i.ID_Movel,
    i.Nome,
    i.Cidade,
    i.Bairro,
    i.Rua,
    i.Numero,
    i.Tipo,
    i.Valor,
    i.Tipo_Negocio,
    i.Nome_Proprietario,
    i.Telefone,
    i.Descricao,
    i.Status,
    COUNT(f.ID_Favorito) as Total_Favoritos
FROM Imóvel i
LEFT JOIN Favorito f ON i.ID_Movel = f.ID_Imovel
GROUP BY i.ID_Movel, i.Nome, i.Cidade, i.Bairro, i.Rua, i.Numero, i.Tipo, i.Valor, i.Tipo_Negocio, i.Nome_Proprietario, i.Telefone, i.Descricao, i.Status;
GO

-- View para usuários com seus favoritos
CREATE VIEW vw_Usuarios_Favoritos AS
SELECT 
    u.ID_Usuario,
    u.Nome as Nome_Usuario,
    u.Email,
    COUNT(f.ID_Favorito) as Total_Favoritos
FROM Usuario u
LEFT JOIN Favorito f ON u.ID_Usuario = f.ID_Usuario
GROUP BY u.ID_Usuario, u.Nome, u.Email;
GO

-- =============================================
-- PROCEDURES PARA OPERAÇÕES COMUNS
-- =============================================

-- Procedure para buscar imóveis por cidade
CREATE PROCEDURE sp_BuscarImoveisPorCidade
    @Cidade NVARCHAR(100)
AS
BEGIN
    SELECT * FROM Imóvel 
    WHERE Cidade LIKE '%' + @Cidade + '%' 
    AND Status = 'Ativo'
    ORDER BY Valor;
END;
GO

-- Procedure para adicionar favorito
CREATE PROCEDURE sp_AdicionarFavorito
    @ID_Usuario INT,
    @ID_Imovel INT,
    @Nome_Imovel NVARCHAR(100),
    @Valor_Imovel INT,
    @Cidade_Imovel NVARCHAR(100)
AS
BEGIN
    IF NOT EXISTS (SELECT 1 FROM Favorito WHERE ID_Usuario = @ID_Usuario AND ID_Imovel = @ID_Imovel)
    BEGIN
        INSERT INTO Favorito (ID_Usuario, ID_Imovel, Data_Adicao, Nome_Imovel, Valor_Imovel, Cidade_Imovel)
        VALUES (@ID_Usuario, @ID_Imovel, CONVERT(VARCHAR(10), GETDATE(), 120), @Nome_Imovel, @Valor_Imovel, @Cidade_Imovel);
    END
END;
GO

-- =============================================
-- COMENTÁRIOS DAS TABELAS
-- =============================================

EXEC sp_addextendedproperty 
    @name = N'MS_Description', 
    @value = N'Tabela de usuários do sistema com autenticação completa', 
    @level0type = N'SCHEMA', @level0name = N'dbo', 
    @level1type = N'TABLE', @level1name = N'Usuario';

EXEC sp_addextendedproperty 
    @name = N'MS_Description', 
    @value = N'Tabela de corretores cadastrados no sistema', 
    @level0type = N'SCHEMA', @level0name = N'dbo', 
    @level1type = N'TABLE', @level1name = N'Corretor';

EXEC sp_addextendedproperty 
    @name = N'MS_Description', 
    @value = N'Tabela de imóveis com informações completas para venda/aluguel', 
    @level0type = N'SCHEMA', @level0name = N'dbo', 
    @level1type = N'TABLE', @level1name = N'Imóvel';

EXEC sp_addextendedproperty 
    @name = N'MS_Description', 
    @value = N'Tabela de transações de locação/venda entre clientes e imóveis', 
    @level0type = N'SCHEMA', @level0name = N'dbo', 
    @level1type = N'TABLE', @level1name = N'Locacao_Cliente';

EXEC sp_addextendedproperty 
    @name = N'MS_Description', 
    @value = N'Tabela de favoritos dos usuários com cache de dados do imóvel', 
    @level0type = N'SCHEMA', @level0name = N'dbo', 
    @level1type = N'TABLE', @level1name = N'Favorito';

-- =============================================
-- INFORMAÇÕES DO SISTEMA
-- =============================================

-- Funcionalidades implementadas:
-- 1. Sistema de autenticação completo (Usuario)
-- 2. Cadastro de imóveis com detalhes (Imovel)
-- 3. Gerenciamento de corretores (Corretor)
-- 4. Sistema de favoritos por usuário (Favorito)
-- 5. Registro de transações (Locacao_Cliente)
-- 6. Views para relatórios
-- 7. Procedures para operações comuns

-- Integração Frontend/Backend:
-- - React.js (Frontend)
-- - Spring Boot (Backend)
-- - SQL Server (Banco de Dados)
-- - APIs RESTful completas

-- =============================================
-- FIM DO SCRIPT - SISTEMA NOBRELAR v2.0
-- =============================================