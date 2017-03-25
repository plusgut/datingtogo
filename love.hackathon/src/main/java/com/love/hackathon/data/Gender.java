package com.love.hackathon.data;

import java.util.Arrays;
import java.util.List;

public enum Gender {

	MAN("Mann"), WOMAN("Frau"), OTHER("Sonstige");

	private final String id;

	private Gender(String id) {
		this.id = id;
	}

	public String getName() {
		return id;
	}

	public static Gender getEnumNameForValue(String value) {
		Gender[] values = Gender.values();
		List<Gender> genders = Arrays.asList(values);
		for (Gender gender2 : genders) {
			if(gender2.getName().equals(value)){
				return gender2; 
			}
		}
		return null; 
//		return genders.stream().filter(gender -> gender.getName().equals(value)).findFirst().orElse(null);
	}
}
