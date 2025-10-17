package com.barueri.NobreLar.controller;

import com.barueri.NobreLar.model.LocacaoCliente;
import com.barueri.NobreLar.model.LocacaoClienteId;
import com.barueri.NobreLar.repository.LocacaoClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/locacoes")
@CrossOrigin(origins = "*")
public class LocacaoClienteController {
    
    @Autowired
    private LocacaoClienteRepository locacaoClienteRepository;
    
    @GetMapping
    public List<LocacaoCliente> listarTodos() {
        return locacaoClienteRepository.findAll();
    }
    
    @PostMapping
    public LocacaoCliente criar(@RequestBody LocacaoCliente locacaoCliente) {
        return locacaoClienteRepository.save(locacaoCliente);
    }
    
    @DeleteMapping("/{idCompra}/{idCliente}")
    public void deletar(@PathVariable Long idCompra, @PathVariable Long idCliente) {
        LocacaoClienteId id = new LocacaoClienteId();
        id.setIdCompraAluga(idCompra);
        id.setIdCliente(idCliente);
        locacaoClienteRepository.deleteById(id);
    }
}