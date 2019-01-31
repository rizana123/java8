package com.riz.ang.dao.impl;

import java.util.List;

import org.hibernate.criterion.DetachedCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate4.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.riz.ang.dao.EmployeeDao;
import com.riz.ang.model.Employee;

@Repository("employeeDao")
public class EmployeeDaoImpl implements EmployeeDao {

	@Autowired
	private HibernateTemplate hibernateTemplate;

	public HibernateTemplate getHibernateTemplate() {
		return hibernateTemplate;
	}

	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}

	public List<Employee> getAllListOfEmployees() {
		DetachedCriteria criteria = DetachedCriteria.forClass(Employee.class);
		List<Employee> employeelist = (List<Employee>) getHibernateTemplate().findByCriteria(criteria);
		for (Employee emp : employeelist) {
			System.out.println(emp.toString());
		}
		System.out.println();
		return employeelist;
	}
}
