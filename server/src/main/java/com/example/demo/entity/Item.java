package com.example.demo.entity;

import javax.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
@Table(name = "Item")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int item_id;

    private String item_name;
    private float price;
    private int amount;

    @ManyToOne
    @JoinColumn(name="type_id")
    private TypeList type;
    
    protected Item(){}


    public Item(int item_id){
        this.item_id = item_id;
    }

    public Item(String item_name, float price,int amount, int type){
        this.item_name = item_name;
        this.price = price;
        this.amount = amount;

        TypeList list = new TypeList();
        list.setType_id(type);
        this.type = list;
    }
}