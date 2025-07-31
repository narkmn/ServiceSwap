package com.serviceswap.controller;

import com.serviceswap.model.User;
import com.serviceswap.repository.UserRepository;
import com.serviceswap.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updateUser) {
        Optional<User> existingUserOpt = userRepository.findById(id);
        if (!existingUserOpt.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        User existingUser = existingUserOpt.get();

        if (updateUser.getName() != null) {
            existingUser.setName(updateUser.getName());
        }
        if (updateUser.getLocation() != null) {
            existingUser.setLocation(updateUser.getLocation());
        }
        if (updateUser.getStatus() != null) {
            existingUser.setStatus(updateUser.getStatus());
        }
        if (updateUser.getRole() != null) {
            existingUser.setRole(updateUser.getRole());
        }
        if (updateUser.getFirstName() != null) {
            existingUser.setFirstName(updateUser.getFirstName());
        }
        if (updateUser.getLastName() != null) {
            existingUser.setLastName(updateUser.getLastName());
        }
        if (updateUser.getAddress() != null) {
            existingUser.setAddress(updateUser.getAddress());
        }
        if (updateUser.getCity() != null) {
            existingUser.setCity(updateUser.getCity());
        }
        if (updateUser.getProvince() != null) {
            existingUser.setProvince(updateUser.getProvince());
        }
        if (updateUser.getPostalCode() != null) {
            existingUser.setPostalCode(updateUser.getPostalCode());
        }
        if (updateUser.getPhone() != null) {
            existingUser.setPhone(updateUser.getPhone());
        }
        if (updateUser.getDob() != null) {
            existingUser.setDob(updateUser.getDob());
        }
        if (updateUser.getSubscriptionType() != null) {
            existingUser.setSubscriptionType(updateUser.getSubscriptionType());
        }
        if (Objects.nonNull(updateUser.getTotalTimeCredit())) {
            existingUser.setTotalTimeCredit(updateUser.getTotalTimeCredit());
        }

        User updatedUser = userRepository.save(existingUser);
        return ResponseEntity.ok(updatedUser);
    }

}