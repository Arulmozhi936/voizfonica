package com.iprimed.voizfonica.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.iprimed.voizfonica.model.Admins;
import com.iprimed.voizfonica.model.User;
import com.iprimed.voizfonica.service.LoginServiceAdmin;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class  LoginAdminController {

	@Autowired
	private LoginServiceAdmin service;	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@PostMapping("/registeradmin")
	@CrossOrigin(origins="http://localhost:4200")
	public Admins registerUser(@RequestBody Admins admin) throws Exception {
		String tempEmail=admin.getEmail();
		if(tempEmail !=null &&  !"".equals(tempEmail)) {
		
			Admins adminobj = service.fetchAdminByEmail(tempEmail);
			if (adminobj != null) {
				throw new Exception("user with "+tempEmail+"is already exist");
			}
		}
		Admins adminObj=null;
		adminObj=service.saveAdmin(admin);
		return adminObj;
	}
	
	
	
	@PostMapping("/adminlogin")
	@CrossOrigin(origins="http://localhost:4200")
	public Admins loginUser(@RequestBody Admins admin) throws Exception  {
		String tempEmail=admin.getEmail();
		String tempPass=admin.getPassword();
		Admins adminObj =null;
		if(tempEmail !=null && tempPass != null) {
			adminObj=service.fetchAdminByEmailAndPassword(tempEmail, tempPass);
		}
		if(adminObj == null) {
			throw new Exception("Bad credintials");
		}
		return adminObj;
	}
	
	
	
	

////	@RequestMapping(path="/adminlist",method=RequestMethod.GET)
//	@GetMapping("/adminlist")
//	//@CrossOrigin(origins ="http://localhost:4200")
//	public List<Admins> showall()
//	{
//		String sql="SELECT * FROM mydata.admin";
//		List<Admins> list= jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Admins.class));
//		
//		return list;
//	}
//	@GetMapping("/adminbyid/{id}")
//	//@CrossOrigin(origins ="http://localhost:4200")
// public List<Admins> AdminById(@PathVariable("id") int id){
//	String id1 = Integer.toString(id);
//	String sql="SELECT * FROM mydata.admin WHERE admin_id="+id1;
//	List<Admins> list=jdbcTemplate.query(sql,BeanPropertyRowMapper.newInstance(Admins.class));
//	return list;
//	}
//	@GetMapping("/deleteadminbyid/{id}")
//	//@CrossOrigin(origins ="http://localhost:4200")
//  public List<Admins> AdminById2(@PathVariable("id") int id){
//	String id1 = Integer.toString(id);
//	String sql="DELETE from mydata.admin WHERE admin_id="+id1;
//	List<Admins> list=jdbcTemplate.query(sql,BeanPropertyRowMapper.newInstance(Admins.class));
//	return list;
//	}
//	

}
