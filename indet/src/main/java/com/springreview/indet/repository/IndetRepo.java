package com.springreview.indet.repository;

import java.util.Optional;

// import java.util.Optional;

// import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springreview.indet.model.IndetModel;

@Repository
public interface IndetRepo extends JpaRepository<IndetModel,Integer>{

    // Optional<User> findByUsername(String username);
    IndetModel findByName(String name);
    Optional<IndetModel> findById(Long id);
} 

