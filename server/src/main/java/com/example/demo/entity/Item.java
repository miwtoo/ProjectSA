package com.example.demo.entity;

import java.util.*;
import javax.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
@Table(name = "Item")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int item_id;

    @OneToMany( mappedBy = "item_id",
                cascade = CascadeType.ALL,
                orphanRemoval = true)
    private List<TakeIn> takein = new ArrayList<>();

    @OneToMany( mappedBy = "item_id",
                cascade = CascadeType.ALL,
                orphanRemoval = true)
    private List<Withdraw> withdraw = new ArrayList<>();

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
