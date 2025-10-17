package com.barueri.NobreLar.controller;

import com.barueri.NobreLar.model.Corretor;
import com.barueri.NobreLar.repository.CorretorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/corretores")
@CrossOrigin(origins = "*")
public class CorretorController {
    
    @Autowired
    private CorretorRepository corretorRepository;
    
    @GetMapping
    public List<Corretor> listarTodos() {
        return corretorRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Corretor buscarPorId(@PathVariable Long id) {
        return corretorRepository.findById(id).orElse(null);
    }
    
    @PostMapping
    public Corretor criar(@RequestBody Corretor corretor) {
        return corretorRepository.save(corretor);
    }
    
    @PutMapping("/{id}")
    public Corretor atualizar(@PathVariable Long id, @RequestBody Corretor corretor) {
        corretor.setIdCorretor(id);
        return corretorRepository.save(corretor);
    }
    
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        corretorRepository.deleteById(id);
    }
}