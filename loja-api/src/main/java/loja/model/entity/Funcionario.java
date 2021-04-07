package loja.model.entity;

import lombok.Data;

import org.hibernate.validator.constraints.br.CPF;


import javax.persistence.*;

@Entity
@Data
public class Funcionario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 150)
    private String Nome;

    @Column(nullable = false, length = 11)

    @CPF(message = "{campo.cpf.invalido}")
    private String CPF;

    @Column(nullable = false, length = 150)
    private String Email;

    @ManyToOne
    @JoinColumn(name = "id_loja")
    private Loja loja;
}
