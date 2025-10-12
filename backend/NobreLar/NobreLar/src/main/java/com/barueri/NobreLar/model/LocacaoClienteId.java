package com.barueri.NobreLar.model;

import lombok.Data;
import java.io.Serializable;

@Data
public class LocacaoClienteId implements Serializable {
    private Integer idCompraAluga;
    private Integer idCliente;
}