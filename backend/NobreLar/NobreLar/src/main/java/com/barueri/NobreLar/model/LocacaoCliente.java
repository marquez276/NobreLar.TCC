package com.barueri.NobreLar.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Locacao_Cliente")
@IdClass(LocacaoClienteId.class)
public class LocacaoCliente {
    @Id
    @Column(name = "ID_Compra_Aluga")
    private Long idCompraAluga;
    
    @Id
    @Column(name = "ID_Cliente")
    private Long idCliente;
    
    @Column(name = "Data_Transacao")
    private Long dataTransacao;
    
    @Column(name = "Tipo_Transacao", length = 20)
    private String tipoTransacao;
    
    @Column(name = "Nome", length = 100)
    private String nome;
    
    @Column(name = "Email", length = 100)
    private String email;
    
    @Column(name = "Telefone")
    private String telefone;
    
    @Column(name = "CPF_CNPJ")
    private String cpfCnpj;
    
    @Column(name = "fk_Imóvel_3_ID_Movel")
    private Long fkImovelIdMovel;
}