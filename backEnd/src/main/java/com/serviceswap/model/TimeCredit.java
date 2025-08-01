package com.serviceswap.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "time_credits")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TimeCredit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Positive or negative credit change
    @Column(nullable = false)
    private int amount;

    // Optional description (e.g., "Completed Service", "Purchased Credits")
    @Column(length = 255)
    private String description;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
