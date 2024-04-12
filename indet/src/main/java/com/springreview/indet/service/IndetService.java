package com.springreview.indet.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import com.springreview.indet.model.IndetModel;
import com.springreview.indet.repository.IndetRepo;

@Service
public class IndetService {
    @Autowired
    private IndetRepo indetRepo;

    @SuppressWarnings("null")
    public IndetModel signUp(IndetModel indetModel) {
        return indetRepo.save(indetModel);
    }

    public IndetModel login(String name, String password) {
        IndetModel indetModel = indetRepo.findByName(name);
        if (indetModel != null && indetModel.getPassword().equals(password)) {
            return indetModel;
        }
        return null; 
    }

    public List<IndetModel> getAllData() {
        return indetRepo.findAll();
    }

    @SuppressWarnings("null")
    public boolean delete(Long id) {
        Optional<IndetModel> indetModelOptional = indetRepo.findById(id);
        
        // If the IndetModel exists, delete it
        if (indetModelOptional.isPresent()) {
            indetRepo.delete(indetModelOptional.get());
            return true;
        }
        
        // IndetModel not found
        return false;
    }

    public IndetModel updateData(Long id, IndetModel indetModel) {
        IndetModel existingIndetModel = indetRepo.findById(indetModel.getId()).orElse(null);
        // If the IndetModel exists, update it
        if (existingIndetModel != null) {
            existingIndetModel.setName(indetModel.getName());
            existingIndetModel.setNumber(indetModel.getNumber());
            // Update other fields as needed
            return indetRepo.save(existingIndetModel);
        }
        // IndetModel not found, return null or throw an exception
        return null;
    }

    public IndetModel getById(Long id) {
        Optional<IndetModel> optionalIndetModel = indetRepo.findById(id);
        return optionalIndetModel.orElse(null);
    }

    
}
