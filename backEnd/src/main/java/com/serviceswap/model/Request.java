package com.serviceswap.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "requests")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Sender of the request
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sender_id", nullable = false)
    private User sender;

    // Receiver of the request
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "receiver_id", nullable = false)
    private User receiver;

    // The service being requested
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "service_id", nullable = false)
    private Service service;

    @Column(nullable = false)
    private String status;

    @Column(name = "swap_type", nullable = true)
    private String swapType;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "swap_service_id", nullable = false)
    private Service swapServiceId;

    @Column(name = "swap_location", nullable = true)
    private String swapLocation;

    @Column(name = "swap_timecredit", nullable = true)
    private Long swapTimecredit;

    @Column(name = "proposed_date", nullable = true)
    private LocalDateTime proposedDate;

    @Column(name = "proposed_location", nullable = true)
    private String proposedLocation;

    @Column(name = "initial_msg", nullable = true)
    private String initialMsg;

    @Column(name = "proposed_myservice_date", nullable = true)
    private LocalDateTime proposedMyserviceDate;

    @Column(name = "confirmed_date", nullable = true)
    private LocalDateTime confirmedDate;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
}
