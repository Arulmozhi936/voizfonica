package com.iprimed.voizfonica.controller;


import java.util.ArrayList;
import java.util.List;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.iprimed.voizfonica.model.User;
import com.iprimed.voizfonica.repository.RegistrationRepository;
import com.iprimed.voizfonica.service.RegistrationService;
import com.iprimed.voizfonica.model.OtpGenerator;


@RestController
//@RequestMapping("/api/v1")
@CrossOrigin(origins="http://localhost:4200")
public class RegistrationController {

	@Autowired
	private RegistrationService service;
	@Autowired
	private JdbcTemplate jdbcTemplate;
	@Autowired
	private SmtpMailSender smtpMailSender;
	@Autowired
	private RegistrationRepository repo;
//
//	@PostMapping("/registeruser")
//	@CrossOrigin(origins="http://localhost:4200")
//	public void sendMail(@RequestBody User user) throws MessagingException {
//		String tempEmail=user.getEmail();
//		
//		smtpMailSender.send(tempEmail, "Voizfonica Registration successfull", 
//			"Hello "+user.getFirstName()+" Welcome to voizfonica! /n Your registration Successfull! /n EmailID="+user.getEmail()+" /n Password="+user.getPassword()+" /n Thankyou! ");
//	}
	
	@PostMapping("/registeruser")
	@CrossOrigin(origins="http://localhost:4200")
	public User registerUser(@RequestBody User user) throws Exception {
		String tempEmail=user.getEmail();
		
		
		if(tempEmail !=null &&  !"".equals(tempEmail)) {
		
			User userobj = service.fetchUserByEmail(tempEmail);
			if (userobj != null) {
				throw new Exception("user with "+tempEmail+"is already exist");
			}
		}
		User userObj=null;
		userObj=service.saveUser(user);
		smtpMailSender.send(tempEmail, "Voizfonica Registration successfull", 
				"Hello "+user.getFirstName()+" Welcome to voizfonica! Your registration was Successfull! EmailID:   "+user.getEmail()+"   Password:   "+user.getPassword()+"         Use this link to login: http://localhost:4200/login Thankyou! ");
			
		return userObj;
	}
	@PostMapping("/forpassword")
	@CrossOrigin(origins="http://localhost:4200")
	public User registerUser1(@RequestBody User user) throws Exception {
		String tempEmail1=user.getEmail();
		User userObj=null;
		smtpMailSender.send(tempEmail1, "Voizfonica Password Reset", 
				"Hello User! Welcome to voizfonica!      Use this link to Reset Password: http://localhost:4200/updateprofile Thankyou! ");
			
		return userObj;
	}
	

	@PutMapping("/updatepassword/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public User updateUserPassword(@PathVariable("id") String id,@RequestBody String pass) {
		//String newPass=user.getPassword();
		return service.upUserProfe(id, pass);
	}
	
	@PostMapping("/remainder/{email}")
	@CrossOrigin(origins="http://localhost:4200")
	public void userMail(@PathVariable("email") String email)  throws Exception {
		String tempMail=email;
		smtpMailSender.send(tempMail, "Voizfonica Recharge Remainder","Hello User your voizfonica plan is going to expire. Please recharge to enjoy our uninterrupted service");
			
	}
	
	
	@PostMapping("/login")
	@CrossOrigin(origins="http://localhost:4200")
	public User loginUser(@RequestBody User user) throws Exception  {
		String tempEmail=user.getEmail();
		String tempPass=user.getPassword();
		User userObj =null;
		if(tempEmail !=null && tempPass != null) {
			userObj=service.fetchUserByEmailAndPassword(tempEmail, tempPass);
		}
		if(userObj == null) {
			throw new Exception("Bad credintials");
		}
		return userObj;
	}
	
//	@GetMapping("/user/id")
//	@CrossOrigin(origins="http://localhost:4200")
//	public User fetchUserById{
//		return service.fetchUserById(id).get();
//	}
	
	
	@RequestMapping(path="/userlist",method=RequestMethod.GET)
	@GetMapping("/userlist")
	@CrossOrigin(origins="http://localhost:4200")
	public List<User> fetchUserList(){
		List<User> user=new ArrayList<User>();
		user=service.fetchuserList();
		return user;
	}
	
	
	@GetMapping("/userbyid/{id}")
	@CrossOrigin(origins ="http://localhost:4200")
	public User fetchUserById(@PathVariable int id) {
		return service.fetchUserById(id).get();
	}
//	@GetMapping("/userbyid/{email}")
//	@CrossOrigin(origins ="http://localhost:4200")
//	public User fetchUserById(@PathVariable String email) {
//		return repo.findByEmail(email);
//	}
	@GetMapping("/users/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public User getById(@PathVariable("email") String email){
		return service.getUserById(email);
	}

	@DeleteMapping("/userbyid/{id}")
	@CrossOrigin(origins ="http://localhost:4200")
	public String DeleteUserById(@PathVariable int id) {
		System.out.println(id);
		return service.deleteUserById(id);
	}
	
	
	
	
//	@PostMapping("/updateprofile/{password}/{newpassword}")
//	@CrossOrigin(origins = "http://localhost:4200")
//	public User fetchUserById1(@PathVariable("password") String password,@PathVariable("newpassword") String newpassword) {
//		System.out.println(password);
//		System.out.println(newpassword);
//		String sql="UPDATE mydata.customer SET password='?' WHERE password='?'";  
//	    jdbcTemplate.update(sql, newpassword,password);
//		return null;
//	}
	
//	String emailid;
//	 @Autowired
//		private JavaMailSender javaMailSender;
//		@GetMapping("/email/{email}")
//		void sendEmail(@PathVariable("email")  String email) {
//			generateotp();
//			emailid=email;
//			SimpleMailMessage msg=new SimpleMailMessage();
//			msg.setTo(email);
//			msg.setSubject("Email-Vaerification");
//			msg.setText("Hi,here is the OTP"+otpsys.getOtp());
//	           javaMailSender.send(msg);	
//	           
//		}
//		OtpGenerator otpsys=new OtpGenerator();
//		public String generateotp()
//		{
//			String otp = String.valueOf(((int) (Math.random() * (10000 - 1000))) + 1000);
//			otpsys.setOtp(otp);
//			otpsys.setExpirydate(System.currentTimeMillis() + 200000);
//			return otp;
//		}
//		@GetMapping("/otp/{otp}")
//		public String verifyotp(@PathVariable("otp") String otp)
//		{
//			if(otpsys.getExpirydate()>System.currentTimeMillis())
//			{
//				if(otpsys.getOtp().equals(otp))
//				{
//					System.out.println("OTP verified");
//				}
//				else
//				{
//					System.out.println("please enter a valid OTP");
//				}
//			}
//			else
//			{
//				System.out.println("otp expired");
//			}
//			return null;
//		}
//		
//		@PutMapping("/forgotpassword")
//		@CrossOrigin(origins = "http://localhost:4200")
//
//		public ResponseEntity forgetUser(
//				@Validated @RequestBody User cust1) throws Exception {
//											
//			
//				String sql="UPDATE mydata.customer SET password=?,confirmpassword=? WHERE email=?";  
//			    jdbcTemplate.update(sql,cust1.getPassword(),cust1.getPassword(),cust1.getEmail());
//				
//							
//	
//			
//			
//			return null;
//		}
//		
	
	
//	@PutMapping("/forgotpass")
//	@CrossOrigin(origins = "http://localhost:4200")
//	
//	
	
	
	
	
	
	
	
	
	
	

	//@CrossOrigin(origins ="http://localhost:4200")
//		public List<User>fetchUsersList(){
//			//logic to fetch from database
//		Object users = null;
//			users=service.fetchbyuseList();
//			return users;
//			
//		}
	//fetch by id
//	@GetMapping("/edit/{id}")
//	//@CrossOrigin(origins ="http://localhost:4200")
//	public User fetchUserById(@PathVariable int id) {
//		return (User) service.fetchUserById(id);
//		 
//		
//	}
//	
//	@DeleteMapping("/deletebyid/{id}")
////	@CrossOrigin(origins ="http://localhost:4200/")
//	public String DeleteUserById(@PathVariable int id) {
//		System.out.println(id);
//		return service.deleteUserById(id);
//	}
//	
//	  @GetMapping("/profile/{emailId}")
//			@CrossOrigin(origins = "http://localhost:4200")
//			public User getById(@PathVariable("emailId") String emailId) throws ResourceNotFoundException{
//				return service.getUserById(emailId);
//			}
//	
	
	
}
