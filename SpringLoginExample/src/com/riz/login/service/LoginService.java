package com.riz.login.service;

import com.riz.login.model.Student;

public interface LoginService {
	public abstract boolean registerStudent(Student student);

	public abstract Student validateLoginCredentials(String email, String password);

}
