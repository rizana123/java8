package com.riz.ang.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.riz.ang.model.Employee;
import com.riz.ang.service.EmployeeService;

@Controller
public class AngularController {
	
	@Autowired
	private EmployeeService employeeService;
	
	 public EmployeeService getEmployeeService() {
		return employeeService;
	}

	public void setEmployeeService(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}

	
	@RequestMapping(value="/",method=RequestMethod.GET)
	public String getindex() {
		return "index";
	}
	@RequestMapping(value = "/user", method = RequestMethod.GET)
		public @ResponseBody List<Employee> getAllEmployeeList() {
			return getEmployeeService().getAllListOfEmployeeService();
		}
}
