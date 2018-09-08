package com.example.demo.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.*;

@Entity
@Data
@Table(name = "Withdraw")
public class Withdraw {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    @JsonBackReference
    private User user_id;

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="item_id")
    @JsonBackReference
    private Item item_id;

    private int amount;
    private String time;
    private String date;

    protected Withdraw() {}

    

    public Withdraw(int user_id , int item_id, int amount, String time, String date){
    
        User user = new User(user_id);
        Item item = new Item(item_id);

        this.user_id = user;
        this.item_id = item;

        this.amount = amount;
        this.time = time;
        this.date = date;
    }

}
