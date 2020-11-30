package com.iprimed.voizfonica.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iprimed.voizfonica.model.Admins;
import com.iprimed.voizfonica.repository.LoginAdminRepository;



@Service
public class LoginServiceAdmin{
	@Autowired
	private LoginAdminRepository repo;
	
	public List<Admins> fetchAdminsList(){
		return repo.findAll();
	}
	
	public Admins saveAdmins(Admins admins) {
		return repo.save(admins);
	}
	public Optional<Admins> fetchAdminsById(int id){
		return repo.findById(id);
	}
	public String deleteAdminsById(int id) {
		String result;
		try {
			repo.deleteById(id);
			result="admins deleted successfully";
		}
		catch(Exception e) {
			result="admin with id is not deleted";
		}
		return result;
			
	}
	
	
	

	public Admins saveAdmin(Admins admin) {
		
		return repo.save(admin);
		
	}
	public Admins fetchAdminByEmail(String email) {
		return repo.findByEmail(email);
		
	}
	
	public Admins fetchAdminByEmailAndPassword(String email,String password) {
		return repo.findByEmailAndPassword(email, password);
		
	}
	
	
	
	
//	public List<Admins> fetchAdminsList(){
//		return repo.findAll();
//	}
//	public Optional<Admins> fetchAdminsById(int id){
//		return repo.findById(id);
//	}
//	
//	public String deleteAdminsById(int id){
//		String result;
//		try {
//		 repo.deleteById(id);
//		 result="admin deleted successfully";
//		}
//		 catch(Exception e) {
//				result="admin with id is not deleted";
//			}
//			return result;
//	}

}