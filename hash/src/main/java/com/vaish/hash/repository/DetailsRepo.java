package com.vaish.hash.repository;

import com.vaish.hash.model.Details;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DetailsRepo extends JpaRepository<Details, Long> {
}
