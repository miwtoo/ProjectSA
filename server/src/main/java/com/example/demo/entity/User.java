package com.example.demo.entity;

import javax.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int user_id;

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
