package com.serviceswap.controller;

import com.serviceswap.dto.ReviewRequest;
import com.serviceswap.dto.ReviewResponse;
import com.serviceswap.model.Review;
import com.serviceswap.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/{serviceId}")
    public ReviewResponse addReview(@PathVariable Long serviceId, @RequestBody ReviewRequest reviewRequest) {
        Review savedReview = reviewService.addReview(serviceId, reviewRequest);

        return new ReviewResponse(
                savedReview.getId(),
                savedReview.getRating(),
                savedReview.getComment(),
                savedReview.getReviewer().getUsername(),
                savedReview.getService().getAverageRating()
        );
    }

}

