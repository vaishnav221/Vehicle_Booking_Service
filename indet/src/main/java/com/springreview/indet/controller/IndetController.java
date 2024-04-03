package com.springreview.indet.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
// import org.springframework.stereotype.Service;

import com.springreview.indet.model.IndetModel;
// import com.springreview.indet.repository.IndetRepo;
import com.springreview.indet.service.IndetService;

@RestController
@RequestMapping("/api")
public class IndetController {
    @Autowired
    private IndetService indetService;

    @PostMapping("/signup")
    public ResponseEntity<IndetModel> signUp(@RequestBody IndetModel indetModel) {
        IndetModel newIndetModel = indetService.signUp(indetModel);
        return new ResponseEntity<>(newIndetModel, HttpStatus.CREATED);
    }

    @GetMapping("/login")
    public ResponseEntity<List<IndetModel>> getAllData() {
        List<IndetModel> dataList = indetService.getAllData();
        if (!dataList.isEmpty()) {
            return new ResponseEntity<>(dataList, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{id}") // Update the mapping to include the 'id' parameter
    public ResponseEntity<IndetModel> updateData(@PathVariable Long id, @RequestBody IndetModel indetModel) {
    
        IndetModel existingIndetModel = indetService.getById(id);
        if (existingIndetModel != null) {
            existingIndetModel.setName(indetModel.getName()); // Update name
            existingIndetModel.setPassword(indetModel.getPassword()); // Update password
            // Update other properties as needed
    
            IndetModel updatedIndetModel = indetService.signUp(existingIndetModel); // Save the updated entity
            return new ResponseEntity<>(updatedIndetModel, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Indicate that the entity with the given id was not found
        }
    }
    

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        boolean deleted = indetService.delete(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
