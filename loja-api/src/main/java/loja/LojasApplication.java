package loja;

import loja.model.entity.Loja;
import loja.model.repository.LojaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class LojasApplication {



    public static void main(String[] args) {
        SpringApplication.run(LojasApplication.class, args);
    }
}
