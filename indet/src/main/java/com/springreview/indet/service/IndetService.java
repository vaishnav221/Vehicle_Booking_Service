package com.springreview.indet.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.springreview.indet.model.IndetModel;
import com.springreview.indet.repository.IndetRepo;

@Service
public class IndetService {
    @Autowired
    private IndetRepo indetRepo;

    public IndetModel signUp(IndetModel indetModel) {
        return indetRepo.save(indetModel);
    }

    public IndetModel login(String name, String password) {
        IndetModel indetModel = indetRepo.findByName(name);
        if (indetModel != null && indetModel.getPassword().equals(password)) {
            return indetModel;
        }
        return null; // Authentication failed
    }

    public List<IndetModel> getAllData() {
        return indetRepo.findAll();
    }
}
