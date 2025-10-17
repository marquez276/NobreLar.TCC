# 🗄️ CONFIGURAÇÃO DE BANCO DE DADOS - NOBRELAR

## 📋 Sistema de Profiles

O sistema está configurado com **profiles** para alternar facilmente entre bancos:

### 🔧 DESENVOLVIMENTO (H2) - Profile: `dev`
```bash
# Rodar com H2 (padrão)
mvn spring-boot:run

# Ou explicitamente
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```

**Características:**
- ✅ Banco H2 em arquivo (persistente)
- ✅ Console web: http://localhost:8080/h2-console
- ✅ Dados salvos em: `./data/nobrelar.mv.db`
- ✅ Logs detalhados para debug

### 🚀 PRODUÇÃO (SQL Server) - Profile: `prod`
```bash
# Rodar com SQL Server
mvn spring-boot:run -Dspring-boot.run.profiles=prod
```

**Características:**
- 🔗 SQL Server na porta 1433
- 🔗 Banco: `TCC`
- 🔗 Autenticação Windows
- 📊 Logs otimizados

## 🛠️ CONFIGURAÇÃO SQL SERVER

### 1. Pré-requisitos
- SQL Server Express instalado
- SQL Server Management Studio (SSMS)
- Serviços iniciados:
  - `SQL Server (SQLEXPRESS)`
  - `SQL Server Browser`

### 2. Habilitar TCP/IP
1. Abrir **SQL Server Configuration Manager**
2. **SQL Server Network Configuration** → **Protocols for SQLEXPRESS**
3. **TCP/IP** → **Enable**
4. **TCP/IP Properties** → **IP Addresses** → **IPAll**
5. **TCP Port**: `1433`
6. **Restart** SQL Server service

### 3. Criar Banco
Execute no SSMS:
```sql
CREATE DATABASE TCC;
```

### 4. Executar Script
Execute o arquivo: `modelo_fisico_sql_server.sql`

## 🔄 ALTERNANDO ENTRE BANCOS

### Método 1: Linha de Comando
```bash
# H2 (desenvolvimento)
mvn spring-boot:run -Dspring-boot.run.profiles=dev

# SQL Server (produção)
mvn spring-boot:run -Dspring-boot.run.profiles=prod
```

### Método 2: IDE
Configurar variável de ambiente:
```
SPRING_PROFILES_ACTIVE=dev
# ou
SPRING_PROFILES_ACTIVE=prod
```

### Método 3: application.properties
Alterar linha no `application.properties`:
```properties
spring.profiles.active=dev  # ou prod
```

## 📁 ARQUIVOS DE CONFIGURAÇÃO

- `application.properties` - Configuração principal
- `application-dev.properties` - Profile desenvolvimento (H2)
- `application-prod.properties` - Profile produção (SQL Server)

## 🔍 VERIFICAÇÃO

### H2 Console
- URL: http://localhost:8080/h2-console
- JDBC URL: `jdbc:h2:file:./data/nobrelar`
- User: `sa`
- Password: `@ITB123456`

### SQL Server
- Server: `localhost:1433`
- Database: `TCC`
- Authentication: Windows

## 🚨 TROUBLESHOOTING

### H2 não conecta
- Verificar se arquivo `./data/nobrelar.mv.db` existe
- Verificar permissões de escrita na pasta

### SQL Server não conecta
- Verificar se serviços estão rodando
- Verificar se TCP/IP está habilitado
- Verificar se porta 1433 está aberta: `netstat -an | findstr 1433`
- Verificar firewall

## 📊 LOGS

### Desenvolvimento (H2)
- SQL queries visíveis
- Logs detalhados
- Debug habilitado

### Produção (SQL Server)
- Logs otimizados
- SQL queries ocultas
- Apenas erros e warnings

---

**✅ SISTEMA PRONTO PARA AMBOS OS BANCOS!**