package loja.model.entity;

import lombok.Data;

import org.hibernate.validator.constraints.br.CNPJ;
import org.hibernate.validator.constraints.br.CPF;


import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class Funcionario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 150)
    @NotEmpty(message="{campo.nome.obrigatorio}")
    private String Nome;


    @NotNull(message = "{campo.cpf.obrigatorio}")
    @CPF(message = "{campo.cpf.invalido}")
    @Column(nullable = false, length = 15)
    private String CPF;

    @Column(nullable = false, length = 150)
    private String Email;

    @ManyToOne
    @JoinColumn(name = "id_loja")
    private Loja loja;
}
