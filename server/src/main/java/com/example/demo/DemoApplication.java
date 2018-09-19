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


			itemRepository.save(new Item("Item 1",255.598f,1,  1L));
			itemRepository.save(new Item("Item 2",588.754f,10, 2L));
            itemRepository.save(new Item("Item 3",455.55548f,4, 1L));
            itemRepository.findAll().forEach(System.out::println);


            userRepository.save(new User("Miwtoo", "CEO"));
            userRepository.save(new User("Miwtree", "Pharmacy"));
            userRepository.save(new User("Miwfour", "Pharmacy"));
            userRepository.findAll().forEach(System.out::println);
            
            takeInRepository.save(new TakeIn(1L, 1L, 5, "11:12", "11 มกราคม 2560"));
            takeInRepository.save(new TakeIn(1L, 2L, 5, "11:12", "11 มกราคม 2560"));
            takeInRepository.save(new TakeIn(1L, 3L, 5, "11:12", "11 มกราคม 2560"));
            takeInRepository.save(new TakeIn(2L, 1L, 5, "11:12", "11 มกราคม 2560"));
            takeInRepository.save(new TakeIn(2L, 2L, 5, "11:12", "11 มกราคม 2560"));
            takeInRepository.save(new TakeIn(2L, 3L, 5, "11:12", "11 มกราคม 2560"));
            takeInRepository.save(new TakeIn(3L, 1L, 5, "11:12", "11 มกราคม 2560"));
            takeInRepository.save(new TakeIn(3L, 2l, 5, "11:12", "11 มกราคม 2560"));
            takeInRepository.save(new TakeIn(3L, 3l, 5, "11:12", "11 มกราคม 2560"));
            takeInRepository.findAll().forEach(System.out::println);

            withDrawRepository.save(new Withdraw(1L, 1l, 5, "11:12", "11 มกราคม 2560"));
            withDrawRepository.save(new Withdraw(1l, 2l, 5, "11:12", "11 มกราคม 2560"));
            withDrawRepository.save(new Withdraw(1l, 3l, 5, "11:12", "11 มกราคม 2560"));
            withDrawRepository.save(new Withdraw(2l, 1l, 5, "11:12", "11 มกราคม 2560"));
            withDrawRepository.save(new Withdraw(2l, 2l, 5, "11:12", "11 มกราคม 2560"));
            withDrawRepository.save(new Withdraw(2l, 3l, 5, "11:12", "11 มกราคม 2560"));
            withDrawRepository.save(new Withdraw(3l, 1l, 5, "11:12", "11 มกราคม 2560"));
            withDrawRepository.save(new Withdraw(3l, 2l, 5, "11:12", "11 มกราคม 2560"));
            withDrawRepository.save(new Withdraw(3l, 3l, 5, "11:12", "11 มกราคม 2560"));
            withDrawRepository.findAll().forEach(System.out::println);
        };
    }
}
