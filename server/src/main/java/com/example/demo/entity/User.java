package com.example.demo.entity;

import java.util.*;
import javax.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int user_id;

    @OneToMany( mappedBy = "user_id",
                cascade = CascadeType.ALL,
                orphanRemoval = true)
    private List<TakeIn> takein = new ArrayList<>();

    @OneToMany( mappedBy = "user_id",
                cascade = CascadeType.ALL,
                orphanRemoval = true)
    private List<Withdraw> withdraw = new ArrayList<>();

    private String user_name;
    private String position;

    protected User(){}

    public User(int user_id){
        this.user_id = user_id;
    }

    public User(String user_name, String position){
        this.user_name = user_name;
        this.position = position;
    }

}
