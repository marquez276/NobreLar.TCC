package com.barueri.NobreLar.repository;

import com.barueri.NobreLar.model.Favorito;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavoritoRepository extends JpaRepository<Favorito, Integer> {
    List<Favorito> findByIdUsuario(Integer idUsuario);
    Optional<Favorito> findByIdUsuarioAndIdImovel(Integer idUsuario, Integer idImovel);
    void deleteByIdUsuarioAndIdImovel(Integer idUsuario, Integer idImovel);
}