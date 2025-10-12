package com.barueri.NobreLar.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Favorito")
public class Favorito {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Favorito")
    private Integer idFavorito;
    
    @Column(name = "ID_Usuario")
    private Integer idUsuario;
    
    @Column(name = "ID_Imovel")
    private Integer idImovel;
    
    @Column(name = "Data_Adicao")
    private String dataAdicao;
    
    // Campos do imóvel para facilitar exibição
    @Column(name = "Nome_Imovel", length = 100)
    private String nomeImovel;
    
    @Column(name = "Valor_Imovel")
    private Integer valorImovel;
    
    @Column(name = "Cidade_Imovel", length = 100)
    private String cidadeImovel;
    
    @Column(name = "Imagem_Imovel", columnDefinition = "TEXT")
    private String imagemImovel;
}