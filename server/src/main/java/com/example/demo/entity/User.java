package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue
    private Long user_id;

    private String user_name;
    private String position;

}
