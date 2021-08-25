package com.art.project.register.modle;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;


@Entity
@Table(name = "register")
public class User {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	@Column(name = "f_name")
	private String fName;
	@Column(name = "l_name")
	private String lName;
	@Column(name = "email")
	private String email;
	@Column(name = "passw")
	private String password;
	
	
	
	public User() {
		
	}
	
	public User(int id, String fName, String lName, String email, String password) {
		super();
		this.id = id;
		this.fName = fName;
		this.lName = lName;
		this.email = email;
		this.password = password;
		
	}
	

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	@Override
	 public String toString() {
		return "[id" + id + ", f_name=" + fName + ", l_name=" + lName + ", email=" + email + ", passw="+password+"]";
 }

	

}
