package com.serviceswap.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "userCreditCardsInfo")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserCreditCardsInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY) // Many cards can belong to one user
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private Long cardnumber;

    @Column(nullable = false)
    private String cardname;

    @Column(nullable = false)
    private String cardtype;

    @Column(nullable = false)
    private LocalDate expiryDate;

    @Column(nullable = true)
    private String status;
}
