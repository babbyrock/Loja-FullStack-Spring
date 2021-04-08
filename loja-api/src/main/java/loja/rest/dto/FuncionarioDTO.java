package loja.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.br.CPF;

@Data
@NoArgsConstructor
public class FuncionarioDTO {
    private String nome;
    private String cpf;
    private String email;
    private Integer idLoja;
}
