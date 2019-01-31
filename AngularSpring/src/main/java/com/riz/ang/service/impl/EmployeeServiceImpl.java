package com.riz.ang.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.riz.ang.dao.EmployeeDao;
import com.riz.ang.model.Employee;
import com.riz.ang.service.EmployeeService;

@Service("employeeService")
public class EmployeeServiceImpl  implements EmployeeService{

	@Autowired
	private EmployeeDao employeeDao;
	public EmployeeDao getEmployeeDao() {
		return employeeDao;
	}
	public void setEmployeeDao(EmployeeDao employeeDao) {
		this.employeeDao = employeeDao;
	}
	public List<Employee> getAllListOfEmployeeService() {
		// TODO Auto-generated method stub
		return getEmployeeDao().getAllListOfEmployees();
	}

}
