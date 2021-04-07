package loja.model.repository;

import loja.model.entity.Loja;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LojaRepository extends JpaRepository<Loja,Integer> {
}
