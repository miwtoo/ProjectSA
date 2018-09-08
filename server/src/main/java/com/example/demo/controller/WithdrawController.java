package com.example.demo.controller;

import java.util.Collection;

import com.example.demo.entity.Withdraw;
import com.example.demo.repository.WithDrawRepository;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WithdrawController{
    private WithDrawRepository repo;

    public WithdrawController(WithDrawRepository repo){
        this.repo = repo;
    }

    @RequestMapping("/withdraw")
    public Collection<Withdraw> withdraws(){
        return repo.findAll();
    }
}