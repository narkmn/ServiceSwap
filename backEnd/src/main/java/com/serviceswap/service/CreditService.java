package com.serviceswap.service;

import com.serviceswap.model.TimeCredit;
import com.serviceswap.repository.TimeCreditRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CreditService {
    @Autowired
    private TimeCreditRepository creditRepository;

    public List<TimeCredit> getAllCredits() {
        return creditRepository.findAll();
    }

    public TimeCredit getCreditById(Long id) {
        return creditRepository.findById(id).orElse(null);
    }

    public TimeCredit createCredit(TimeCredit credit) {
        return creditRepository.save(credit);
    }

    public void deleteCredit(Long id) {
        creditRepository.deleteById(id);
    }
}
