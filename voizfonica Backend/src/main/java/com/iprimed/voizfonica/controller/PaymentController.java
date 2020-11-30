package com.iprimed.voizfonica.controller;

import java.util.HashMap;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.iprimed.voizfonica.ResourceNotFoundException;
import com.iprimed.voizfonica.model.History;
import com.iprimed.voizfonica.model.Payment;
import com.iprimed.voizfonica.model.User;
import com.iprimed.voizfonica.repository.PaymentRepo;
import com.iprimed.voizfonica.service.HistoryServices;
import com.iprimed.voizfonica.service.PaymentServices;
import com.iprimed.voizfonica.controller.SmtpMailSender;


@RestController
@RequestMapping("/pay")
public class PaymentController {

	@Autowired
    private PaymentRepo pr;

    @Autowired
   private SmtpMailSender smtpMailSender;


	
    @PostMapping("/payment")
	 @CrossOrigin(origins = "http://localhost:4200")
	    public Payment addPayment(@RequestBody Payment payment) throws Exception {
		 Payment payObj = null;
			smtpMailSender.send(payment.getEmailId(), "Voizfonica Payment successfull","Recharge Done Successfully !!!!");
//			payObj = pr.saveUser(payment);
//			return userObj;
			smtpMailSender.sendMail(payment.getEmailId(), "Invoice", "Payment Recipt");
	        return pr.save(payment);
	    }


	    @GetMapping("/payment")
	    @CrossOrigin(origins = "http://localhost:4200")
	    public ResponseEntity<List<Payment>> getAllPayment() 
	    {

	        return ResponseEntity.ok(pr.findAll());
	    }

	    @GetMapping("/payment/{id}")
	    @CrossOrigin(origins = "http://localhost:4200")
	    public ResponseEntity<Payment> getPaymentById(@PathVariable(value = "id") Integer paymentId)
	            throws ResourceNotFoundException {
	      Payment payment = pr.findById(paymentId)
	                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + paymentId));
	        return ResponseEntity.ok().body(payment);
	    }
	    
	    
	    
	    @GetMapping("/payments/{emailId}")
    	@CrossOrigin(origins = "http://localhost:4200")
		public List<Payment> getByEmailId(@PathVariable(value="emailId") String emailId) throws ResourceNotFoundException{
			return pr.getByEmailId(emailId);
		}


}
