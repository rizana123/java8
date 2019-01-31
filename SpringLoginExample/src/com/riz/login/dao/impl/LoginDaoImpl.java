package com.riz.login.dao.impl;

import java.util.List;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate4.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.riz.login.dao.LoginDao;
import com.riz.login.model.Login;
import com.riz.login.model.Student;

@Repository("loginDao")
public class LoginDaoImpl implements LoginDao {

	@Autowired
	private HibernateTemplate hibernateTemplate;

	public HibernateTemplate getHibernateTemplate() {
		return hibernateTemplate;
	}

	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}

	@Override
	public boolean saveStudent(Student student) {

		int id = (int) getHibernateTemplate().save(student);
		if (id > 0)
			return true;
		return false;
	}

	@SuppressWarnings("unchecked")
	@Override
	public Student getLoginCredentials(String email, String password) {
		DetachedCriteria criteria = DetachedCriteria.forClass(Student.class);
		criteria.add(Restrictions.eq("email", email));
		criteria.add(Restrictions.eq("password", password));
		List<Student> studentList = (List<Student>) getHibernateTemplate().findByCriteria(criteria);
		if (studentList != null && studentList.size() > 0)
			return studentList.get(0);
		else
			return null;
	}

}