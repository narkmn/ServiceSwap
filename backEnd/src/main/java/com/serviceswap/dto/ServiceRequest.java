package com.serviceswap.dto;

import lombok.Data;

@Data
public class ServiceRequest {
    private String title;
    private String category;
    private String description;
    private String serviceType;
    private String serviceDifficulty;
    private String imgUrl;
    private String status;
    private String availability;
    private String location;
    private Long userId;  // To link the service with a user
}
