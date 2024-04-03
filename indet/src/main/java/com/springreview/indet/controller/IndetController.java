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
}
