package com.love.hackathon;

import java.util.HashSet;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.love.hackathon.data.Gender;
import com.love.hackathon.data.User;

public class JSONProcessor {

	public User createNewUser(JSONObject jsonObject) {
			
			String gender = (String) jsonObject.get("myself");
			String searchingForGender = (String) jsonObject.get("search");
			String userName= (String)jsonObject.get("username"); 
			Integer age = (Integer) jsonObject.get("alter");

			return new User(Gender.getEnumNameForValue(gender), Gender.getEnumNameForValue(searchingForGender), userName);
	}
	
	@SuppressWarnings("unchecked")
	public JSONArray getMatchesForJson(HashSet<User> users) {

		JSONArray array= new JSONArray(); 
		
		for (User user : users) {
			JSONObject obj = new JSONObject();
			obj.put("username", user.getUserName());
			obj.put("myself", user.getGender().getName());
			obj.put("search", user.getSearchingForGender().getName());
			
			array.add(obj);		
		}

		System.out.println(array);
		return array;
	}

}
