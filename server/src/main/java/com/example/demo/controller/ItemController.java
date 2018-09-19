package com.example.demo.controller;

import java.util.Collection;

import com.example.demo.entity.Item;
import com.example.demo.repository.ItemRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController{
    private ItemRepository repo;

    public ItemController(ItemRepository repo){
        this.repo = repo;
    }

    @GetMapping("/item")
    public Collection<Item> item(){
        return repo.findAll();
    }
}