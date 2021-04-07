package loja.rest;

import loja.model.entity.Loja;
import loja.model.repository.LojaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/lojas")
@CrossOrigin("http://localhost:4200")
public class LojaController {


    private final LojaRepository repository;

    @Autowired
    public LojaController(LojaRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Loja> obterTodos(){
        return repository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Loja salvar( @RequestBody @Valid Loja loja){
        return repository.save(loja);
    }

    @GetMapping("{id}")
    public Loja acharPorId( @PathVariable Integer id ){
        return repository
                .findById(id)
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Loja não encontrada") );
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Integer id){
        repository
            .findById(id)
            .map( loja -> {
                repository.delete(loja);
                return Void.TYPE;
            })
            .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Loja não encontrada") );
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar ( @PathVariable Integer id, @RequestBody Loja lojaAtualizado)
    {
        repository
                .findById(id)
                .map( loja -> {
                    lojaAtualizado.setId(loja.getId());
                    return repository.save(lojaAtualizado);
                })
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Loja não encontrada"));
    }
}
