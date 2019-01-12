package com.riz.login.dao;

import com.riz.login.model.Student;

public interface LoginDao {

	public abstract boolean saveStudent(Student student);

	public abstract Student getLoginCredentials(String email, String password);

}
