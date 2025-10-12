package com.barueri.NobreLar.repository;

import com.barueri.NobreLar.model.LocacaoCliente;
import com.barueri.NobreLar.model.LocacaoClienteId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocacaoClienteRepository extends JpaRepository<LocacaoCliente, LocacaoClienteId> {
}