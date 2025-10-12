package com.barueri.NobreLar.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Usuario")
    private Integer idUsuario;
    
    @Column(name = "Nome", length = 100)
    private String nome;
    
    @Column(name = "Email", length = 100, unique = true)
    private String email;
    
    @Column(name = "Senha", length = 255)
    private String senha;
    
    @Column(name = "Telefone", length = 20)
    private String telefone;
    
    @Column(name = "CPF", length = 14)
    private String cpf;
    
    @Column(name = "Data_Nascimento")
    private String dataNascimento;
    
    @Column(name = "Foto", columnDefinition = "TEXT")
    private String foto;
    
    @Column(name = "Status", length = 20)
    private String status = "Ativo";
}