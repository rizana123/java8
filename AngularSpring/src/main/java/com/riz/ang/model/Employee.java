package com.riz.ang.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="EMPLOYEE")
public class Employee {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int empid;
	
	@Column(name="EMPNAME")
	private String empname;
	
	@Column(name="EMPDEPT")
	private String empdept;
	
	@Column(name="EMPCITY")
	private String empcity;
	
	@Column(name="EMPDOB")
	private String empdob;
	
	public int getEmpid() {
		return empid;
	}
	public void setEmpid(int empid) {
		this.empid = empid;
	}
	public String getEmpname() {
		return empname;
	}
	public void setEmpname(String empname) {
		this.empname = empname;
	}
	public String getEmpdept() {
		return empdept;
	}
	public void setEmpdept(String empdept) {
		this.empdept = empdept;
	}
	public String getEmpcity() {
		return empcity;
	}
	public void setEmpcity(String empcity) {
		this.empcity = empcity;
	}
	public String getEmpdob() {
		return empdob;
	}
	public void setEmpdob(String empdob) {
		this.empdob = empdob;
	}
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Employee [empid=" + empid + ", empname=" + empname + ", empdept=" + empdept + ", empcity=" + empcity
				+ ", empdob=" + empdob + "]";
	}
	
}
