package com.example.demo.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int user_id;

    @OneToMany(fetch = FetchType.EAGER)
    private List<TakeIn> takein = new ArrayList<>();

    @OneToMany(fetch = FetchType.EAGER)
    private List<Withdraw> withdraw = new ArrayList<>();

    private String user_name;
    private String position;

    protected User(){}

    public User(String user_name, String position){
        this.user_name = user_name;
        this.position = position;
    }

}
