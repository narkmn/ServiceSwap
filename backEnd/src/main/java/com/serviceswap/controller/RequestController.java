package com.serviceswap.controller;

import com.serviceswap.model.Request;
import com.serviceswap.model.User;
import com.serviceswap.repository.RequestRepository;
import com.serviceswap.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/api/requests")
public class RequestController {
    @Autowired
    private RequestService requestService;
    @Autowired
    private RequestRepository requestRepository;

    @GetMapping
    public List<Request> getAllRequests() {
        return requestService.getAllRequests();
    }

    @GetMapping("/{id}")
    public Request getRequest(@PathVariable Long id) {
        return requestService.getRequestById(id);
    }

    @PostMapping
    public Request createRequest(@RequestBody Request request) {
        return requestService.createRequest(request);
    }

    @DeleteMapping("/{id}")
    public void deleteRequest(@PathVariable Long id) {
        requestService.deleteRequest(id);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Request> updateRequestStatus(@PathVariable Long id, @RequestBody Request incomingRequest) {
        Optional<Request> existingRequestOpt = requestRepository.findById(id);

        if (existingRequestOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Request existingRequest = existingRequestOpt.get();

        if (incomingRequest.getStatus() != null) {
            existingRequest.setStatus(incomingRequest.getStatus());
        }

        Request updatedRequest = requestRepository.save(existingRequest);
        return ResponseEntity.ok(updatedRequest);
    }

}
