package com.barueri.NobreLar.controller;

import com.barueri.NobreLar.model.Usuario;
import com.barueri.NobreLar.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {
    
    @Autowired
    private UsuarioRepository usuarioRepository;
    
    @GetMapping
    public List<Usuario> listarTodos() {
        return usuarioRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Usuario buscarPorId(@PathVariable Integer id) {
        return usuarioRepository.findById(id).orElse(null);
    }
    
    @PostMapping
    public Usuario criar(@RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String senha = credentials.get("senha");
        
        var usuario = usuarioRepository.findByEmailAndSenha(email, senha);
        if (usuario.isPresent()) {
            return ResponseEntity.ok(usuario.get());
        } else {
            return ResponseEntity.badRequest().body("Credenciais inválidas");
        }
    }
    
    @PutMapping("/{id}")
    public Usuario atualizar(@PathVariable Integer id, @RequestBody Usuario usuario) {
        usuario.setIdUsuario(id);
        return usuarioRepository.save(usuario);
    }
    
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id) {
        usuarioRepository.deleteById(id);
    }
}