package com.barueri.NobreLar.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Imóvel")
public class Imovel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Movel")
    private Integer idMovel;
    
    @Column(name = "Numero_de_Cotas")
    private Integer numeroDeCotas;
    
    @Column(name = "Valor")
    private Integer valor;
    
    @Column(name = "Tipo", length = 50)
    private String tipo;
    
    @Column(name = "Endereco", length = 200)
    private String endereco;
    
    @Column(name = "Nome", length = 100)
    private String nome;
    
    @Column(name = "Descricao", length = 500)
    private String descricao;
    
    @Column(name = "Cidade", length = 100)
    private String cidade;
    
    @Column(name = "Bairro", length = 100)
    private String bairro;
    
    @Column(name = "Rua", length = 100)
    private String rua;
    
    @Column(name = "Numero")
    private String numero;
    
    @Column(name = "Telefone", length = 20)
    private String telefone;
    
    @Column(name = "Nome_Proprietario", length = 100)
    private String nomeProprietario;
    
    @Column(name = "Tipo_Negocio", length = 20)
    private String tipoNegocio;
    
    @Column(name = "Imagem", columnDefinition = "TEXT")
    private String imagem;
    
    @Column(name = "Status", length = 20)
    private String status = "Ativo";
}