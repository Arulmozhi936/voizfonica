package com.iprimed.voizfonica.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iprimed.voizfonica.model.Payment;
import com.iprimed.voizfonica.repository.PaymentRepo;



@Service
public class PaymentServices {

	@Autowired
	private PaymentRepo repo;
	
	public List<Payment> fetchuserList(){
		return repo.findAll();
	}
}
