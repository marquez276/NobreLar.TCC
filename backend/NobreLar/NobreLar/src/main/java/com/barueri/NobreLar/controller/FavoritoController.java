package com.barueri.NobreLar.controller;

import com.barueri.NobreLar.model.Favorito;
import com.barueri.NobreLar.repository.FavoritoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favoritos")
@CrossOrigin(origins = "*")
public class FavoritoController {
    
    @Autowired
    private FavoritoRepository favoritoRepository;
    
    @GetMapping
    public List<Favorito> listarTodos() {
        return favoritoRepository.findAll();
    }
    
    @GetMapping("/usuario/{idUsuario}")
    public List<Favorito> listarPorUsuario(@PathVariable Integer idUsuario) {
        return favoritoRepository.findByIdUsuario(idUsuario);
    }
    
    @PostMapping
    public Favorito criar(@RequestBody Favorito favorito) {
        return favoritoRepository.save(favorito);
    }
    
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id) {
        favoritoRepository.deleteById(id);
    }
    
    @DeleteMapping("/usuario/{idUsuario}/imovel/{idImovel}")
    public void deletarPorUsuarioEImovel(@PathVariable Integer idUsuario, @PathVariable Integer idImovel) {
        favoritoRepository.deleteByIdUsuarioAndIdImovel(idUsuario, idImovel);
    }
}