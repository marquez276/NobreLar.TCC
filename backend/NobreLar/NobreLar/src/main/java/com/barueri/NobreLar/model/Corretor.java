package com.barueri.NobreLar.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Corretor")
public class Corretor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Corretor")
    private Long idCorretor;
    
    @Column(name = "Nome", length = 100)
    private String nome;
    
    @Column(name = "Telefone")
    private String telefone;
    
    @Column(name = "Email", length = 100)
    private String email;
    
    @Column(name = "Registro_CRECI")
    private String registroCreci;
}