 package com.springreview.indet.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class IndetModel {
      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      private int id;
      private String name;
      private String number;
      private String password;

      public IndetModel(int id, String name, String number, String password) {
		this.id = id;
		this.name = name;
		this.number = number;
		this.password = password;
	}

    
      public IndetModel(){
  
    }

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
   
      
}
