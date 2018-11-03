package com.riz.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.riz.beans.Employee;
import com.riz.dao.EmployeeDao;

@Controller
public class EmpController {
	
	@Autowired
	EmployeeDao employeeDao;

	@RequestMapping("/addemp")
	public ModelAndView showAddEmpForm() {
		System.out.println("Inside AddEmp");
		return new ModelAndView("empaddForm", "command", new Employee());
	}
	 @RequestMapping(value="/saveemp",method = RequestMethod.POST)  
	public ModelAndView showSaveEmpForm(@ModelAttribute("emp")Employee emp) {
		System.out.println("Inside saveemp1");
		employeeDao.insertEmp(emp);
		System.out.println("Inside saveemp2");
		return new ModelAndView("redirect:/viewEmployee");
	//	return new ModelAndView("showEmployeeForm", "command", new Employee());
	}
	 
	 @RequestMapping(value="/viewEmployee")
	 public ModelAndView showEmpList() {
		List<Employee> list= employeeDao.getEmployees();
		System.out.println("list"+list.size());
		System.out.println("list"+list.get(0).getId());
		 return new ModelAndView("showEmployeeForm", "list", list);
	 }
}
