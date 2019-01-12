package com.riz.login.service.impl;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.riz.login.controller.LoginController;
import com.riz.login.dao.LoginDao;
import com.riz.login.model.Student;
import com.riz.login.service.LoginService;

@Service("loginService")
public class LoginServiceImpl implements LoginService {
	private static Logger log = Logger.getLogger(LoginServiceImpl.class);

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
		log.info("=======================registerStudent Service===================");
		return getLoginDao().saveStudent(student);
	}


	@Override
	public Student validateLoginCredentials(String email, String password) {
		
		log.info("=======================validateLoginCredentials Service===================");
		return getLoginDao().getLoginCredentials(email,password);
	}

}
