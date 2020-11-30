package com.iprimed.voizfonica.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iprimed.voizfonica.model.Payment;

public interface PaymentRepo extends JpaRepository<Payment, Integer> {

	List<Payment> getByEmailId(String emailId);
	

}
