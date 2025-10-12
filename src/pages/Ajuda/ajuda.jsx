import './ajuda.css'

function Ajuda() {
    return (
        <div className="ajuda-container">
            <div className="ajuda-header">
                <h1>Central de Ajuda</h1>
                <p>Tudo que você precisa saber sobre o NobleLar</p>
            </div>

            <div className="ajuda-content">
                <div className="ajuda-section">
                    <h2>🏠 Como usar o Sistema NobleLar</h2>
                    <div className="ajuda-card">
                        <h3>1. Visualizando Imóveis</h3>
                        <p>• Acesse a página <strong>Home</strong> para ver todos os imóveis disponíveis</p>
                        <p>• Veja fotos, preços, localização e detalhes completos</p>
                        <p>• Informações do proprietário estão disponíveis para contato</p>
                    </div>
                    
                    <div className="ajuda-card">
                        <h3>2. Cadastrando Imóveis</h3>
                        <p>• Vá para a página <strong>Moradia/Imóveis</strong></p>
                        <p>• Preencha: nome, cidade, bairro, rua, descrição</p>
                        <p>• Adicione valor, tipo de negócio (Venda/Aluguel)</p>
                        <p>• Inclua dados do proprietário e fotos</p>
                        <p>• <strong>Necessário fazer login</strong> para cadastrar</p>
                    </div>

                    <div className="ajuda-card">
                        <h3>3. Gerenciando Corretores</h3>
                        <p>• Acesse <strong>Corretores</strong> para cadastrar profissionais</p>
                        <p>• Registre nome, telefone, email e CREA</p>
                        <p>• Edite ou remova corretores conforme necessário</p>
                    </div>

                    <div className="ajuda-card">
                        <h3>4. Registrando Locações</h3>
                        <p>• Use <strong>Locações</strong> para registrar vendas/aluguéis</p>
                        <p>• Vincule cliente ao imóvel negociado</p>
                        <p>• Registre data e tipo da transação</p>
                        <p>• Mantenha histórico de negociações</p>
                    </div>
                </div>

                <div className="ajuda-section">
                    <h2>💰 Como financiar sua casa</h2>
                    <div className="ajuda-card">
                        <h3>Financiamento Bancário</h3>
                        <p>• <strong>Documentação:</strong> CPF, RG, comprovante de renda, extrato bancário</p>
                        <p>• <strong>Entrada:</strong> Geralmente 20% a 30% do valor do imóvel</p>
                        <p>• <strong>Prazo:</strong> Até 35 anos para pagamento</p>
                        <p>• <strong>Juros:</strong> Varia entre 8% a 12% ao ano</p>
                    </div>

                    <div className="ajuda-card">
                        <h3>Casa Verde e Amarela</h3>
                        <p>• Programa habitacional do governo federal</p>
                        <p>• Para famílias com renda até R$ 7.000</p>
                        <p>• Juros subsidiados e condições especiais</p>
                        <p>• Consulte os bancos parceiros</p>
                    </div>

                    <div className="ajuda-card">
                        <h3>FGTS</h3>
                        <p>• Use o saldo para entrada ou amortização</p>
                        <p>• Mínimo de 3 anos de trabalho</p>
                        <p>• Não ter financiamento ativo no SFH</p>
                    </div>
                </div>

                <div className="ajuda-section">
                    <h2>🏡 Como alugar</h2>
                    <div className="ajuda-card">
                        <h3>Documentos necessários</h3>
                        <p>• CPF e RG (locatário e cônjuge)</p>
                        <p>• Comprovante de renda (3x o valor do aluguel)</p>
                        <p>• Comprovante de residência</p>
                        <p>• Referências pessoais e comerciais</p>
                    </div>

                    <div className="ajuda-card">
                        <h3>Garantias</h3>
                        <p>• <strong>Fiador:</strong> Pessoa que se responsabiliza pelo pagamento</p>
                        <p>• <strong>Seguro Fiança:</strong> Seguro que cobre inadimplência</p>
                        <p>• <strong>Caução:</strong> Depósito de 3 meses de aluguel</p>
                        <p>• <strong>Título de Capitalização:</strong> Alternativa ao fiador</p>
                    </div>

                    <div className="ajuda-card">
                        <h3>Custos envolvidos</h3>
                        <p>• Primeiro aluguel</p>
                        <p>• Caução (se escolhida como garantia)</p>
                        <p>• Taxa de administração da imobiliária</p>
                        <p>• Seguro fiança (se aplicável)</p>
                    </div>
                </div>

                <div className="ajuda-section">
                    <h2>⚙️ Configuração do Sistema</h2>
                    <div className="ajuda-card">
                        <h3>Backend (Spring Boot)</h3>
                        <p>• <strong>Porta:</strong> 8080</p>
                        <p>• <strong>Banco:</strong> SQL Server (porta 1433)</p>
                        <p>• <strong>APIs:</strong> /api/imoveis, /api/corretores, /api/locacoes, /api/usuarios</p>
                    </div>

                </div>

                <div className="ajuda-section">
                    <h2>📞 Precisa de mais ajuda?</h2>
                    <div className="ajuda-card contato-card">
                        <h3>Suporte Técnico</h3>
                        <p>📧 <strong>Email:</strong> suporte@noblelar.com.br</p>
                        <p>📱 <strong>WhatsApp:</strong> (11) 99999-9999</p>
                        <p>🕒 <strong>Horário:</strong> Segunda a Sexta, 8h às 18h</p>
                        <p>💻 <strong>Sistema:</strong> Versão 2.0 - Integração Backend/Frontend</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ajuda