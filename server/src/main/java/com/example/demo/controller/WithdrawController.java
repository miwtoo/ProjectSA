package com.example.demo.controller;

import java.util.Collection;
import java.util.Optional;

import com.example.demo.entity.Withdraw;
import com.example.demo.repository.WithDrawRepository;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/withdraw")
@CrossOrigin("http://localhost:4200")
public class WithdrawController{
    private WithDrawRepository repo;

    public WithdrawController(WithDrawRepository repo){
        this.repo = repo;
    }

    @GetMapping()
    public Collection<Withdraw> withdraws(){
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Withdraw> takeinByid(@PathVariable Long id ){
        return repo.findById(id);
    }

    @PostMapping(consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public String Add(Withdraw withdraws){
        repo.save(withdraws);

        return "CREATE";
    }
}