package com.iprimed.voizfonica.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iprimed.voizfonica.model.History;
//import com.iprimed.voizfonica.model.User;

@Repository
public interface HistoryRepo extends JpaRepository<History,Integer> {
	List<History> findAllById(int id);
}

//public interface RegistrationRepository extends JpaRepository<User,Integer> {
//
//	public User findByEmail(String email);
//	public User findByEmailAndPassword(String email,String password);
//	public User findByPassword(String password);
//	List<User> findAllById(int id);
////List<User> findByEmail(String email);
//	
//	List<User> findAllByEmail(String email);
//	//public User findById(int id);
//	
//	
//}
