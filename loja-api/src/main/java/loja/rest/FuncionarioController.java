package loja.rest;

import loja.model.entity.Funcionario;
import loja.model.entity.Loja;
import loja.model.repository.FuncionarioRepository;
import loja.model.repository.LojaRepository;
import loja.rest.dto.FuncionarioDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/funcionarios")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:4200")
public class FuncionarioController {

    private final LojaRepository lojaRepository;
    private final FuncionarioRepository repository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Funcionario salvar(@RequestBody @Valid FuncionarioDTO dto){
        Integer idLoja = dto.getIdLoja();

        Loja loja =
                lojaRepository
                .findById(idLoja)
                .orElseThrow(() ->
                    new ResponseStatusException(
                            HttpStatus.BAD_REQUEST, "Loja inexistente."));

        Funcionario funcionario = new Funcionario();
        funcionario.setNome(dto.getNome());
        funcionario.setCPF(dto.getCpf());
        funcionario.setEmail(dto.getEmail());
        funcionario.setLoja(loja);

        return repository.save(funcionario);
    }

    @GetMapping
    public List<Funcionario> obterTodos(){
        return repository.findAll();
    }


    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Integer id){


        repository
                .findById(id)
                .map( funcionario -> {
                    repository.delete(funcionario);
                    return Void.TYPE;
                })
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Loja não encontrada") );

    }

    /*@PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar (  @PathVariable Integer id, @RequestBody @Valid  Funcionario funcionarioatualizado, FuncionarioDTO dto)
    {
        Integer idLoja = dto.getIdLoja();

        repository
                .findById(id)
                .map( funcionario -> {
                    funcionarioatualizado.setId(funcionario.getId());
                    return repository.save(funcionarioatualizado);
                })

                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Loja não encontrada"));


    }*/
}
