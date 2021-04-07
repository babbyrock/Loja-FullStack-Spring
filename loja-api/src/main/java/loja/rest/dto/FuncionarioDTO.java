package loja.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class FuncionarioDTO {
    private String nome;
    private String cpf;
    private String email;
    private Integer idLoja;
}
