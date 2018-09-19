package com.example.demo.controller;

import java.util.Collection;

import com.example.demo.entity.TakeIn;
import com.example.demo.repository.TakeInRepository;

import org.springframework.web.bind.annotation.GetMapping;
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
}