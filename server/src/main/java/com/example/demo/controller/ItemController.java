package com.example.demo.controller;

import java.util.Collection;

import com.example.demo.entity.Item;
import com.example.demo.repository.ItemRepository;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
public class ItemController{
    private ItemRepository repo;

    public ItemController(ItemRepository repo){
        this.repo = repo;
    }

    @GetMapping("/item")
    public Collection<Item> item(){
        return repo.findAll();
    }

    @PostMapping(consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public String Add(Item items){
        repo.save(items);

        return "CREATE";
    }
}