package com.love.hackathon.data;

public class User {

	private Integer age; 
	
	private String userName; 
	
	private Gender gender; 
	
	private Gender searchingForGender; 
	
	public User(Gender ownGender, Gender searchingForGender, String userName) {
		this.setUserName(userName); 
		this.setGender(ownGender); 
		this.setSearchingForGender(searchingForGender);
	}

	public Gender getSearchingForGender() {
		return searchingForGender;
	}

	public void setSearchingForGender(Gender searchingForGender) {
		this.searchingForGender = searchingForGender;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}
	
	
}
