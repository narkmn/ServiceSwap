package com.serviceswap.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "services")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "service_title", nullable = false)
    private String serviceTitle;

    @Column(nullable = true)
    private String category;

    @Column(nullable = true, length = 500)
    private String description;

    @Column(name = "service_type", nullable = true)
    private String serviceType;

    @Column(name = "service_difficulty", nullable = true)
    private String serviceDifficulty;

    @Column(name = "img_url", nullable = true)
    private String imgUrl;

    @Column(nullable = true)
    private String status;

    @Column(nullable = true)
    private String availability; // newly added

    @Column(nullable = true)
    private String location; // newly added

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private double averageRating = 0.0;

    @Column(nullable = false)
    private int totalRatings = 0;
}
