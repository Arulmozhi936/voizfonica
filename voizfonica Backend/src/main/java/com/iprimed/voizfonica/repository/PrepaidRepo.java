package com.iprimed.voizfonica.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iprimed.voizfonica.model.Prepaid;


public interface PrepaidRepo extends JpaRepository<Prepaid, Integer> {
	public Prepaid findByEmailId(String emailId);


	public Prepaid findByEmailIdAndPassword(String email, String password);
}
 