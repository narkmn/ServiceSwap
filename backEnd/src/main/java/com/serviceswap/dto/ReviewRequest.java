package com.serviceswap.dto;

import lombok.Data;

@Data
public class ReviewRequest {
    private int rating;
    private String comment;
    private Long reviewerId;
}

