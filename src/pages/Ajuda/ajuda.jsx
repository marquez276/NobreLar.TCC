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
                    <h2>🏠 Como usar nosso site</h2>
                    <div className="ajuda-card">
                        <h3>1. Navegando pelas moradias</h3>
                        <p>• Acesse a página <strong>Home</strong> para ver todas as moradias disponíveis</p>
                        <p>• Clique em qualquer moradia para ver detalhes completos</p>
                        <p>• Use os filtros para encontrar o que procura</p>
                    </div>
                    
                    <div className="ajuda-card">
                        <h3>2. Cadastrando sua moradia</h3>
                        <p>• Vá para a página <strong>Moradia</strong></p>
                        <p>• Preencha todos os dados solicitados</p>
                        <p>• Adicione fotos de qualidade</p>
                        <p>• Escolha entre Venda ou Aluguel</p>
                    </div>

                    <div className="ajuda-card">
                        <h3>3. Gerenciando seu perfil</h3>
                        <p>• Acesse <strong>Perfil</strong> para ver suas informações</p>
                        <p>• Mantenha seus dados sempre atualizados</p>
                        <p>• Adicione uma foto de perfil</p>
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
                    <h2>📞 Precisa de mais ajuda?</h2>
                    <div className="ajuda-card contato-card">
                        <h3>Entre em contato conosco</h3>
                        <p>📧 <strong>Email:</strong> ajuda@noblelar.com.br</p>
                        <p>📱 <strong>WhatsApp:</strong> (11) 99999-9999</p>
                        <p>🕒 <strong>Horário:</strong> Segunda a Sexta, 8h às 18h</p>
                        <p>📍 <strong>Endereço:</strong> Rua das Casas, 123 - São Paulo/SP</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ajuda