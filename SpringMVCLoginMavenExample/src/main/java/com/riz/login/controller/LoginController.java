package com.riz.login.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.riz.login.model.Login;
import com.riz.login.model.Student;
import com.riz.login.service.LoginService;

@Controller
public class LoginController {

	
	private static Logger log = Logger.getLogger(LoginController.class);

	@Autowired
	private LoginService loginService;
	
	

	public LoginService getLoginService() {
		return loginService;
	}

	public void setLoginService(LoginService loginService) {
		this.loginService = loginService;
	}

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String homePage() {
		log.info("=======================homePage===================");
		return "home";
	}

	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public String registerPage(Model model) {
		log.info("=======================registerPage===================");
		model.addAttribute("student", new Student());
		return "register";
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String loginPage(Model model) {
		log.info("=======================loginPage===================");
		
		model.addAttribute("loginCredentials", new Login());
		return "login";
	}

	@RequestMapping(value = "/registerSuccess", method = RequestMethod.POST)
	public ModelAndView registerSuccess(@Valid @ModelAttribute("student") Student student,
			BindingResult bindingResult) {
		log.info("=======================registerSuccess===================");
		if (bindingResult.hasErrors()) {
			return new ModelAndView("register");
		}
		ModelAndView modelAndView = new ModelAndView("welcome");
		getLoginService().registerStudent(student);
		modelAndView.addObject("student", student);
		return modelAndView;

	}

	@RequestMapping(value = "/loginSuccess", method = RequestMethod.POST)
	public ModelAndView loginSuccess(@Valid @ModelAttribute("loginCredentials") Login loginCredentials,
			BindingResult bindingResult) {
		log.info("=======================loginSuccess===================");
		if (bindingResult.hasErrors()) {
			return new ModelAndView("login");
		}

		ModelAndView modelAndView = new ModelAndView("welcome");
		Student student = getLoginService().validateLoginCredentials(loginCredentials.getEmail(),
				loginCredentials.getPassword());
		if (student != null) {
			modelAndView.addObject("student", student);
			return modelAndView;
		} else {
			return new ModelAndView("notFound");
		}

	}

	@ModelAttribute
	public void headerMessage(Model model) {
		
		log.info("=======================creating header Message===================");
		model.addAttribute("headerMessage", "Welcome to My Technology");
		List<String> techList = new ArrayList<>();
		techList.add("Hibernate");
		techList.add("Spring");
		techList.add("JSP");
		techList.add("Servlet");
		techList.add("Struts");

		model.addAttribute("technologyList", techList);
	}

}
