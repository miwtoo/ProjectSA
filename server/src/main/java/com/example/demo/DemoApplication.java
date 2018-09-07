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
    ApplicationRunner init(TypeListRepository typeListRepository, ItemRepository itemRepository) {
        return args -> {
            Stream.of("เวชสำอาง/ครีมบำรุงผิว","ผลิตภัณฑ์เสริมอาหาร","สมุนไพรยาแผนโบราณ").forEach(name -> {
                TypeList allType = new TypeList();
                allType.setType(name);
                typeListRepository.save(allType);
            });
			typeListRepository.findAll().forEach(System.out::println);
			
			TypeList list = new TypeList();
			list.setType_id(1);

			itemRepository.save(new Item("Item 1",255.9f,1, 4));
            itemRepository.findAll().forEach(System.out::println);
        };
    }
}
