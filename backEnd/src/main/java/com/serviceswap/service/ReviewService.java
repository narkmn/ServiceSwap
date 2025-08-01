package com.serviceswap.service;

import com.serviceswap.dto.ReviewRequest;
import com.serviceswap.model.Review;
import com.serviceswap.model.User;
import com.serviceswap.repository.ReviewRepository;
import com.serviceswap.repository.ServiceRepository;
import com.serviceswap.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private ServiceRepository serviceRepository;
    @Autowired
    private UserRepository userRepository;

    public Review addReview(Long serviceId, ReviewRequest reviewRequest) {
        com.serviceswap.model.Service service = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new RuntimeException("Service not found"));

        Review review = new Review();
        review.setRating(reviewRequest.getRating());
        review.setComment(reviewRequest.getComment());

        // Fetch the user by reviewerId
        User reviewer = userRepository.findById(reviewRequest.getReviewerId())
                .orElseThrow(() -> new RuntimeException("Reviewer not found"));

        review.setReviewer(reviewer);
        review.setService(service);


        // Save review and update average rating
        Review savedReview = reviewRepository.save(review);

        double totalScore = service.getAverageRating() * service.getTotalRatings();
        totalScore += review.getRating();
        service.setTotalRatings(service.getTotalRatings() + 1);
        service.setAverageRating(totalScore / service.getTotalRatings());

        serviceRepository.save(service);

        return savedReview;
    }

}
