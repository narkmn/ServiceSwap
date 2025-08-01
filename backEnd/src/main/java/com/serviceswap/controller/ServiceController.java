package com.serviceswap.controller;

import com.serviceswap.dto.ServiceRequest;
import com.serviceswap.model.Service;
import com.serviceswap.model.User;
import com.serviceswap.repository.UserRepository;
import com.serviceswap.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/services")
public class ServiceController {
    @Autowired
    private ServiceService serviceService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("")
    public List<Service> getAllServices() {
        return serviceService.getAllServices();
    }

    @GetMapping("/{id}")
    public Service getService(@PathVariable Long id) {
        return serviceService.getServiceById(id);
    }

    @PostMapping
    public ResponseEntity<Service> createService(@RequestBody ServiceRequest request) {
        // Find the user
        Optional<User> userOpt = userRepository.findById(request.getUserId());
        if (userOpt.isEmpty()) {
            return ResponseEntity.badRequest().build(); // User not found
        }

        // Create the service via ServiceService
        Service newService = serviceService.createServiceFromDto(request, userOpt.get());

        return ResponseEntity.ok(newService);
    }
    @DeleteMapping("/{id}")
    public void deleteService(@PathVariable Long id) {
        serviceService.deleteService(id);
    }
}

