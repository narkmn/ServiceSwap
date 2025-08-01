package com.serviceswap.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReviewResponse {
    private Long id;
    private int rating;
    private String comment;
    private String reviewerName;
    private double serviceAverageRating;
}
