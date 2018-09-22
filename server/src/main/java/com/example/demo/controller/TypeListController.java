package com.example.demo.controller;

import java.util.Collection;

import com.example.demo.entity.TypeList;
import com.example.demo.repository.TypeListRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
public class TypeListController{
    private TypeListRepository repo;

    public TypeListController(TypeListRepository repo){
        this.repo = repo;
    }

    @GetMapping("/typelist")
    public Collection<TypeList> typelists(){
        return repo.findAll();
    }
}