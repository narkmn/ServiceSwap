package com.serviceswap.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "services")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String category;
    @Column(nullable = true)
    private String description;
    @Column(nullable = true)
    private String serviceType;
    @Column(nullable = true)
    private String serviceDifficulty;
    @Column(nullable = true)
    private String img_url;
    @Column(nullable = true)
    private String status;
    @Column(nullable = true)
    private String availability;
    @Column(nullable = true)
    private String location;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
