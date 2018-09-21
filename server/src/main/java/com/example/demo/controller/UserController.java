package com.example.demo.controller;

import java.util.Collection;
import java.util.Optional;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController{
    private UserRepository repo;

    public UserController(UserRepository repo){
        this.repo = repo;
    }

    @GetMapping()
    public Collection<User> user(){
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public Optional<User> takeinByid(@PathVariable Long id ){
        return repo.findById(id);
    }
}