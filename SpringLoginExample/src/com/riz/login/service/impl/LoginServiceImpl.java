package com.riz.login.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.riz.login.dao.LoginDao;
import com.riz.login.model.Login;
import com.riz.login.model.Student;
import com.riz.login.service.LoginService;

@Service("loginService")
public class LoginServiceImpl implements LoginService {

	@Autowired
	private LoginDao loginDao;

	public LoginDao getLoginDao() {
		return loginDao;
	}

	public void setLoginDao(LoginDao loginDao) {
		this.loginDao = loginDao;
	}

	@Override
	public boolean registerStudent(Student student) {
		return getLoginDao().saveStudent(student);
	}


	@Override
	public Student validateLoginCredentials(String email, String password) {
		// TODO Auto-generated method stub
		return getLoginDao().getLoginCredentials(email,password);
	}

}
