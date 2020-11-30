package com.iprimed.voizfonica.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class History {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int price;
	private String rechargeDate;
	private int data;
	
	
	
	public History() {
	
	}



	public History(int id, int price, String rechargeDate, int data) {
		super();
		this.id = id;
		this.price = price;
		this.rechargeDate = rechargeDate;
		this.data = data;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public int getPrice() {
		return price;
	}



	public void setPrice(int price) {
		this.price = price;
	}



	public String getRechargeDate() {
		return rechargeDate;
	}



	public void setRechargeDate(String rechargeDate) {
		this.rechargeDate = rechargeDate;
	}



	public int getData() {
		return data;
	}



	public void setData(int data) {
		this.data = data;
	}
	
	
	
}
