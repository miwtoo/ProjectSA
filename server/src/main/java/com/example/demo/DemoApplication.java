package com.example.demo;

import com.example.demo.repository.*;
import com.example.demo.entity.*;

import java.util.stream.Stream;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
    ApplicationRunner init(TypeListRepository typeListRepository, ItemRepository itemRepository, UserRepository userRepository, TakeInRepository takeInRepository, WithDrawRepository withDrawRepository) {
        return args -> {

            
            Stream.of("เวชสำอาง/ครีมบำรุงผิว","ผลิตภัณฑ์เสริมอาหาร","สมุนไพรยาแผนโบราณ").forEach(name -> {
                TypeList allType = new TypeList();
                allType.setType(name);
                typeListRepository.save(allType);
            });
			typeListRepository.findAll().forEach(System.out::println);


			itemRepository.save(new Item("Item 1",255.598f,5, 3));
			itemRepository.save(new Item("Item 2",588.754f,10, 2));
            itemRepository.save(new Item("Item 3",455.55548f,4, 1));
            itemRepository.findAll().forEach(System.out::println);


            userRepository.save(new User("Miwtoo", "CEO"));
            userRepository.save(new User("Miwtree", "Pharmacy"));
            userRepository.save(new User("Miwfour", "Pharmacy"));
            userRepository.findAll().forEach(System.out::println);
            
            takeInRepository.save(new TakeIn(1, 1, 5, "11:12", "11 มกราคม 2560"));
            takeInRepository.save(new TakeIn(1, 2, 5, "11:12", "11 มกราคม 2560"));
            takeInRepository.save(new TakeIn(1, 3, 5, "11:12", "11 มกราคม 2560"));
            takeInRepository.save(new TakeIn(2, 1, 5, "11:12", "11 มกราคม 2560"));
            takeInRepository.save(new TakeIn(2, 2, 5, "11:12", "11 มกราคม 2560"));
            takeInRepository.save(new TakeIn(2, 3, 5, "11:12", "11 มกราคม 2560"));
            takeInRepository.save(new TakeIn(3, 1, 5, "11:12", "11 มกราคม 2560"));
            takeInRepository.save(new TakeIn(3, 2, 5, "11:12", "11 มกราคม 2560"));
            takeInRepository.save(new TakeIn(3, 3, 5, "11:12", "11 มกราคม 2560"));
            takeInRepository.findAll().forEach(System.out::println);

            withDrawRepository.save(new Withdraw(1, 1, 5, "11:12", "11 มกราคม 2560"));
            withDrawRepository.save(new Withdraw(1, 2, 5, "11:12", "11 มกราคม 2560"));
            withDrawRepository.save(new Withdraw(1, 3, 5, "11:12", "11 มกราคม 2560"));
            withDrawRepository.save(new Withdraw(2, 1, 5, "11:12", "11 มกราคม 2560"));
            withDrawRepository.save(new Withdraw(2, 2, 5, "11:12", "11 มกราคม 2560"));
            withDrawRepository.save(new Withdraw(2, 3, 5, "11:12", "11 มกราคม 2560"));
            withDrawRepository.save(new Withdraw(3, 1, 5, "11:12", "11 มกราคม 2560"));
            withDrawRepository.save(new Withdraw(3, 2, 5, "11:12", "11 มกราคม 2560"));
            withDrawRepository.save(new Withdraw(3, 3, 5, "11:12", "11 มกราคม 2560"));
            withDrawRepository.findAll().forEach(System.out::println);
        };
    }
}
