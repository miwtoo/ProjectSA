package com.example.demo.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "Withdraw")
public class Withdraw implements Serializable {
    @Id
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user_id;

    @Id
    @ManyToOne
    @JoinColumn(name="item_id")
    private Item item_id;

    private int amount;
    private String time;
    private String date;

    protected Withdraw() {}
}
