package loja.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.hibernate.validator.constraints.br.CNPJ;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Loja {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 150)
    @NotEmpty(message="{campo.nomeFantasia.obrigatorio}")
    private String nomeFantasia;

    @Column(nullable = false, length = 150)
    @NotEmpty(message = "{campo.razaoSocial.obrigatorio}")
    private String razaoSocial;

    @NotNull(message = "{campo.cnpj.obrigatorio}")
    @CNPJ(message = "{campo.cnpj.invalido}")
    @Column(nullable = false, length = 18)
    private String cnpj;

    @NotEmpty(message = "{campo.telefone.obrigatorio}")
    @Column(nullable = false, length = 15)
    private String telefone;

    @OneToMany( mappedBy = "loja" , fetch = FetchType.LAZY )
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Set<Funcionario> funcionarios;

}
