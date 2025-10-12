package com.barueri.NobreLar.controller;

import com.barueri.NobreLar.model.Imovel;
import com.barueri.NobreLar.repository.ImovelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/imoveis")
@CrossOrigin(origins = "*")
public class ImovelController {
    
    @Autowired
    private ImovelRepository imovelRepository;
    
    @GetMapping
    public List<Imovel> listarTodos() {
        return imovelRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Imovel buscarPorId(@PathVariable Integer id) {
        return imovelRepository.findById(id).orElse(null);
    }
    
    @PostMapping
    public Imovel criar(@RequestBody Imovel imovel) {
        return imovelRepository.save(imovel);
    }
    
    @PutMapping("/{id}")
    public Imovel atualizar(@PathVariable Integer id, @RequestBody Imovel imovel) {
        imovel.setIdMovel(id);
        return imovelRepository.save(imovel);
    }
    
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id) {
        imovelRepository.deleteById(id);
    }
}