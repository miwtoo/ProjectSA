package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "Take_in")
public class TakeIn{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user_id;

    @ManyToOne
    @JoinColumn(name="item_id")
    private Item item_id;

    private int amount;
    private String time;
    private String date;

    protected TakeIn() {}

    

    public TakeIn(int user_id , int item_id, int amount, String time, String date){
    
        User user = new User();
        Item item = new Item();

        user.setUser_id(user_id);
        this.user_id = user;

        item.setItem_id(item_id);
        this.item_id = item;

        this.amount = amount;
        this.time = time;
        this.date = date;
    }

}
