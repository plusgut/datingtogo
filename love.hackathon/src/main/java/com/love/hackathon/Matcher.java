package com.love.hackathon;

import java.io.Serializable;
import java.util.HashSet;

import javax.ejb.Singleton;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.love.hackathon.data.Gender;
import com.love.hackathon.data.User;

@Singleton
public class Matcher implements Serializable {

	private static final long serialVersionUID = 1L;

	private HashSet<User> users;

	public JSONProcessor jsonProcessor = new JSONProcessor();

	public Matcher(HashSet<User> users) {
		this.users = users;
		
		/**
		 * TODO Adapt persistence, Matcher isn't injected as singleton. 
		 * Therefore the userList is always newly initialized. 
		 * In order to make findMatches work, the userList is right now just filled manually 
		*/
		users.add(new User(Gender.MAN, Gender.WOMAN, "user1"));
		users.add(new User(Gender.MAN, Gender.WOMAN, "2"));
		users.add(new User(Gender.WOMAN, Gender.MAN, "3"));
		users.add(new User(Gender.WOMAN, Gender.MAN, "4"));

	}

	public User addNewUser(JSONObject inputJsonObj) {
		User addNewUser = jsonProcessor.createNewUser(inputJsonObj);
		users.add(addNewUser);
		return addNewUser;
	}

	public JSONArray findMatches(JSONObject jsonObject) {
		String username = (String) jsonObject.get("username");
		// User user= users.stream()
		// .filter(userInList ->
		// userInList.getUserName().equals(userName)).findFirst().orElse(null);
		// User user= new User(Gender.MAN , Gender.MAN, "Man");
		for (User user : users) {
			if (user.getUserName().equals(username)) {
				HashSet<User> matches = getMatchingUsersFor(user);

				return jsonProcessor.getMatchesForJson(matches);

			}
		}
		return null;

	}

	private HashSet<User> getMatchingUsersFor(User user) {
		HashSet<User> potentialUsers = new HashSet<User>();
		for (User potentialMatch : users) {
			if (!(potentialMatch.getUserName().equals(user.getUserName()))
					&& user.getSearchingForGender().equals(potentialMatch.getGender())) {
				potentialUsers.add(potentialMatch);
			}
		}
		return potentialUsers;
		
		// List<User> potentialUsers = users.stream()
		// .filter(userInList ->
		// !userInList.getUserName().equals(user.getUserName()))
		// .collect(Collectors.toList());
		//
		// return potentialUsers.stream()
		// .filter(potentialUser ->
		// user.getSearchingForGender().equals(potentialUser.getGender()))
		// .collect(Collectors.toCollection(HashSet::new));

	}

}
