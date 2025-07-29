package com.serviceswap.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/")
    public String welcome() {
        return "Welcome to the ServiceSwap Backend!";
    }

    @GetMapping("/api/test")
    public String testApi() {
        return "API is working!";
    }
}

