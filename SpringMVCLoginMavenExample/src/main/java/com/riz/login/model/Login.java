package com.riz.login.model;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;

public class Login {

	@NotEmpty
	@Email
	private String email;
	@NotEmpty
	private String password;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Login() {
	}

	@Override
	public String toString() {
		return "Login [email=" + email + ", password=" + password + "]";
	}

}
