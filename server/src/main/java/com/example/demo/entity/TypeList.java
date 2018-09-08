package com.example.demo.entity;

import javax.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
@Table(name = "Type_List")
public class TypeList {
    @Id
    @GeneratedValue
    private int type_id;

    private String type;
}
