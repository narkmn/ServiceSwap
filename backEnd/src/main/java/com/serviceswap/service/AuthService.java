package com.serviceswap.service;

import com.serviceswap.model.User;
import com.serviceswap.repository.UserRepository;
import com.serviceswap.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;  //
    private final PasswordEncoder passwordEncoder;

    // Register new user
    public String register(User user) {
        // Hash password
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole("USER");

        // Save user
        userRepository.save(user);

        // Return JWT
        return jwtUtil.generateToken(user.getEmail());
    }

    // Login existing user
    public Optional<String> login(String email, String rawPassword) {
        return userRepository.findByEmail(email)
                .filter(user -> passwordEncoder.matches(rawPassword, user.getPassword()))
                .map(user -> jwtUtil.generateToken(email)); //
    }
}
