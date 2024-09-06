package com.example.springreactvaddintest2.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.*;


@Entity
@Getter @Setter @Builder @NoArgsConstructor @AllArgsConstructor
public class Customer {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    @Size(min = 4 , max = 200 )
    private String nom ;
    @Email
    private String email ;

}
