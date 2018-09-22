package com.example.demo.repository;

import com.example.demo.entity.Withdraw;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public
interface WithDrawRepository extends JpaRepository<Withdraw, Long> {
    
}