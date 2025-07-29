package com.serviceswap.controller;

import com.serviceswap.model.TimeCredit;
import com.serviceswap.service.CreditService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/credits")
public class TimeCreditController {
    @Autowired
    private CreditService creditService;

    @GetMapping
    public List<TimeCredit> getAllCredits() {
        return creditService.getAllCredits();
    }

    @GetMapping("/{id}")
    public TimeCredit getCredit(@PathVariable Long id) {
        return creditService.getCreditById(id);
    }

    @PostMapping
    public TimeCredit createCredit(@RequestBody TimeCredit credit) {
        return creditService.createCredit(credit);
    }

    @DeleteMapping("/{id}")
    public void deleteCredit(@PathVariable Long id) {
        creditService.deleteCredit(id);
    }
}