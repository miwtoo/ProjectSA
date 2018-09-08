package com.example.demo.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "Item")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int item_id;

    @OneToMany(fetch = FetchType.EAGER)
    private List<TakeIn> takein = new ArrayList<>();

    @OneToMany(fetch = FetchType.EAGER)
    private List<Withdraw> withdraw = new ArrayList<>();

    private String item_name;
    private float price;
    private int amount;

    @ManyToOne
    @JoinColumn(name="type_id")
    private TypeList type;
    
    protected Item(){}


    public Item(String item_name, float price,int amount, int type){
        this.item_name = item_name;
        this.price = price;
        this.amount = amount;

        TypeList list = new TypeList();
        list.setType_id(type);
        this.type = list;
    }
}
