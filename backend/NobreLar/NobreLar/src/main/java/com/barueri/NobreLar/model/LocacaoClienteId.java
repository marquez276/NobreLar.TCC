package com.barueri.NobreLar.model;

import lombok.Data;
import java.io.Serializable;

@Data
public class LocacaoClienteId implements Serializable {
    private Long idCompraAluga;
    private Long idCliente;
}