package com.iprimed.voizfonica.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iprimed.voizfonica.model.Postpaid;




public interface PostpaidRepo extends JpaRepository<Postpaid, Integer> {
	public Postpaid findByEmailId(String emailId);


	public Postpaid findByEmailIdAndPassword(String email, String password);
}
 