// Formatadores para campos de formulário

// Formatar valor monetário: 900000 -> R$ 900.000,00
export const formatCurrency = (value) => {
  if (!value) return '';
  
  // Remove tudo que não é número
  const numbers = value.toString().replace(/\D/g, '');
  
  // Converte para número e divide por 100 para ter centavos
  const amount = parseFloat(numbers) / 100;
  
  // Formata como moeda brasileira
  return amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};

// Formatar CPF: 12345678901 -> 123.456.789-01
export const formatCPF = (value) => {
  if (!value) return '';
  
  // Remove tudo que não é número
  const numbers = value.replace(/\D/g, '');
  
  // Aplica a máscara do CPF
  return numbers
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

// Formatar CNPJ: 12345678000195 -> 12.345.678/0001-95
export const formatCNPJ = (value) => {
  if (!value) return '';
  
  // Remove tudo que não é número
  const numbers = value.replace(/\D/g, '');
  
  // Aplica a máscara do CNPJ
  return numbers
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

// Formatar CPF ou CNPJ automaticamente
export const formatCPFCNPJ = (value) => {
  if (!value) return '';
  
  const numbers = value.replace(/\D/g, '');
  
  if (numbers.length <= 11) {
    return formatCPF(value);
  } else {
    return formatCNPJ(value);
  }
};

// Formatar telefone: 11999887766 -> (11) 99988-7766
export const formatPhone = (value) => {
  if (!value) return '';
  
  // Remove tudo que não é número
  const numbers = value.replace(/\D/g, '');
  
  // Aplica a máscara do telefone
  if (numbers.length <= 10) {
    // Telefone fixo: (11) 3333-4444
    return numbers
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  } else {
    // Celular: (11) 99999-8888
    return numbers
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  }
};

// Remover formatação para enviar ao backend
export const removeCurrencyFormat = (value) => {
  if (!value) return 0;
  return parseFloat(value.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
};

export const removePhoneFormat = (value) => {
  if (!value) return '';
  return value.replace(/\D/g, '');
};

export const removeCPFCNPJFormat = (value) => {
  if (!value) return '';
  return value.replace(/\D/g, '');
};