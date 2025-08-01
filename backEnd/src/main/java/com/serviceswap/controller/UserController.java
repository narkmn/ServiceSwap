package com.serviceswap.controller;

import com.serviceswap.model.User;
import com.serviceswap.repository.UserRepository;
import com.serviceswap.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;



    // Get a user by ID
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    // Create a new user
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    // Get all user
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }


    // Delete a user
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    // Update user (PATCH)
    @PatchMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updateUser) {
        Optional<User> existingUserOpt = userRepository.findById(id);
        if (existingUserOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        User existingUser = existingUserOpt.get();

        // Update all available fields
        if (updateUser.getUsername() != null) existingUser.setUsername(updateUser.getUsername());
        if (updateUser.getRole() != null) existingUser.setRole(updateUser.getRole());
        if (updateUser.getStatus() != null) existingUser.setStatus(updateUser.getStatus());
        if (updateUser.getFirstName() != null) existingUser.setFirstName(updateUser.getFirstName());
        if (updateUser.getLastName() != null) existingUser.setLastName(updateUser.getLastName());
        if (updateUser.getPhone() != null) existingUser.setPhone(updateUser.getPhone());
        if (updateUser.getAddress() != null) existingUser.setAddress(updateUser.getAddress());
        if (updateUser.getCity() != null) existingUser.setCity(updateUser.getCity());
        if (updateUser.getProvince() != null) existingUser.setProvince(updateUser.getProvince());
        if (updateUser.getPostalCode() != null) existingUser.setPostalCode(updateUser.getPostalCode());
        if (updateUser.getDob() != null) existingUser.setDob(updateUser.getDob());
        if (updateUser.getSubscription() != null) existingUser.setSubscription(updateUser.getSubscription());
        if (Objects.nonNull(updateUser.getTotalTimeCredit())) existingUser.setTotalTimeCredit(updateUser.getTotalTimeCredit());

        // Save updated user
        User updatedUser = userRepository.save(existingUser);
        return ResponseEntity.ok(updatedUser);
    }
}
