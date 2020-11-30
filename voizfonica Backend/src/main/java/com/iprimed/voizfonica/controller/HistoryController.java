package com.iprimed.voizfonica.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.iprimed.voizfonica.model.History;
import com.iprimed.voizfonica.service.HistoryServices;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HistoryController {

	@Autowired
	private HistoryServices service;
	
	@RequestMapping(path="/tranhistory",method=RequestMethod.GET)
	@GetMapping("/tranhistory")
	@CrossOrigin(origins="http://localhost:4200")
	public List<History> fetchUserList(){
		List<History> history=new ArrayList<History>();
		history=service.fetchuserList();
		return history;
	}
}
