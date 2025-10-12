package com.barueri.NobreLar.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Corretor")
public class Corretor {
    @Id
    @Column(name = "ID_Corretor")
    private Integer idCorretor;
    
    @Column(name = "Nome", length = 20)
    private String nome;
    
    @Column(name = "Telefone")
    private Integer telefone;
    
    @Column(name = "Email", length = 100)
    private String email;
    
    @Column(name = "Registro_CREA")
    private Integer registroCrea;
}