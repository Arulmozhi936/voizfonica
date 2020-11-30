package com.iprimed.voizfonica.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Admins {
	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="adminId")
	private int adminId;
	@Column(name="firstName")
	private String firstName;
	@Column(name="lastName")
	private String lastName;
	@Column(name="gender")
	private String gender;
	@Column(name="email")
	private String email;
	@Column(name="mobileNumber")
	private long mobileNumber;
	@Column(name="adharNumber")
	private long adharNumber;
	@Column(name="password")
	private String password;
	
	
	
	public Admins() {
		
	}
	
	public Admins(int adminId, String firstName, String lastName, String gender, String email, long mobileNumber,
			long adharNumber, String password) {
		super();
		this.adminId = adminId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.email = email;
		this.mobileNumber = mobileNumber;
		this.adharNumber = adharNumber;
		this.password = password;
	}
	public int getadminId() {
		return adminId;
	}
	public void setadminId(int adminId) {
		this.adminId = adminId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public long getAdharNumber() {
		return adharNumber;
	}
	public void setAdharNumber(long adharNumber) {
		this.adharNumber = adharNumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	

}
