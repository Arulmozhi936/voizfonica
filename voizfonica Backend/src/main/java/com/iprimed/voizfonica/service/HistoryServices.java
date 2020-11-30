package com.iprimed.voizfonica.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iprimed.voizfonica.model.History;
import com.iprimed.voizfonica.repository.HistoryRepo;

@Service
public class HistoryServices {

	@Autowired
	private HistoryRepo repo;
	
	public List<History> fetchuserList(){
		return repo.findAll();
	}
}
