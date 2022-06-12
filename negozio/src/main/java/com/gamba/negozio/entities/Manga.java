package com.gamba.negozio.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "manga")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Manga {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String mangaka;
    private String genre;
    private String publisher;
    private String pubDate;
    private String stato;
    private int volumi;
    private double price;
    private String description;
    private String img;

}
