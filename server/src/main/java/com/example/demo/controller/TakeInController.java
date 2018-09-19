package com.example.demo.controller;

import java.util.Collection;
import java.util.Optional;

import com.example.demo.entity.TakeIn;
import com.example.demo.repository.TakeInRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TakeInController{
    private TakeInRepository repo;

    public TakeInController(TakeInRepository repo){
        this.repo = repo;
    }

    @GetMapping("/take-in")
    public Collection<TakeIn> takeinAll(){
        return repo.findAll();
    }

    @GetMapping("/take-in/{id}")
    public Optional<TakeIn> takeinByid(@PathVariable Long id ){
        return repo.findById(id);
    }

    @PostMapping("/take-in/")
    public void AddItem(){
        
    }
}