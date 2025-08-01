package com.serviceswap.service;

import com.serviceswap.model.Service;
import com.serviceswap.model.User;
import com.serviceswap.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;


import java.time.LocalDateTime;
import java.util.List;

@org.springframework.stereotype.Service
public class ServiceService {
    @Autowired
    private ServiceRepository serviceRepository;

    public List<Service> getAllServices() {
        return serviceRepository.findAll();
    }

    public Service getServiceById(Long id) {
        return serviceRepository.findById(id).orElse(null);
    }

    public Service createServiceFromDto(com.serviceswap.dto.ServiceRequest request, User user) {
        Service service = Service.builder()
                .serviceTitle(request.getTitle())
                .category(request.getCategory())
                .description(request.getDescription())
                .serviceType(request.getServiceType())
                .serviceDifficulty(request.getServiceDifficulty())
                .imgUrl(request.getImgUrl())
                .status(request.getStatus())
                .availability(request.getAvailability())
                .location(request.getLocation())
                .user(user)
                .createdAt(LocalDateTime.now())
                .build();

        return serviceRepository.save(service);
    }

    public void deleteService(Long id) {
        serviceRepository.deleteById(id);
    }
}
