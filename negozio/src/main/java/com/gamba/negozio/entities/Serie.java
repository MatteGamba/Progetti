package com.gamba.negozio.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "serie")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Serie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String production;
    private String genre;
    private String actors;
    private String pubDate;
    private String stato;
    private double price;
    private String writer;
    private String description;
    private String img;

}
