package com.iprimed.voizfonica.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iprimed.voizfonica.model.Admins;

@Repository
public interface LoginAdminRepository extends JpaRepository<Admins,Integer> {
	public Admins findByEmailAndPassword(String email,String password);

	public Admins findByEmail(String email);
	
//	List<Admins> findAllById(int id);
//	List<Admins> findAllByEmail(String email);
//	
	
	
//	List<Admins> findAllById(int id);
//	//List<User> findByEmail(String email);
//		
//		List<Admins> findAllByEmail(String email);
	
	
	
	
}
