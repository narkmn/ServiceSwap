package com.serviceswap.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Data
@Table(name="user")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(nullable = false)
    private String password;

    private String name;
    private String location;
    private String status;
    private String role;

    @Column(nullable = true)
    private String firstName;
    @Column(nullable = true)
    private String lastName;
    @Column(nullable = true)
    private String address;
    @Column(nullable = true)
    private String city;
    @Column(nullable = true)
    private String province;
    @Column(nullable = true)
    private String postalCode;
    @Column(nullable = true)
    private String phone;
    @Column(nullable = true)
    private Date dob;
    @Column(nullable = true)
    private String subscriptionType;
    @Column(nullable = true)
    private long totalTimeCredit;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
}
