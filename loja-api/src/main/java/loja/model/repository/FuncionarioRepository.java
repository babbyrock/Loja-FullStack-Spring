package loja.model.repository;

import loja.model.entity.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FuncionarioRepository extends JpaRepository<Funcionario, Integer> {

/*@Query (" select s from Funcionario s join s.loja c where upper( c.nomeFantasia ) like upper ( :nomeFantasia ) and LOWER(s.nome) like upper ( :nome ) " )
    List<Funcionario> findByNomeFantasiaLojaAndNome(
            @Param("nomeFantasia") String nomeFantasia, @Param("nome") String nome);*/
}
