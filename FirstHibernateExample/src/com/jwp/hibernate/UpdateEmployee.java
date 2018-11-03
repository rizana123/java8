package com.jwp.hibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class UpdateEmployee {

	public static void main(String args[]) {

		// Configure the hibernate configuration file

		Configuration con = new Configuration();
		con.configure("hibernate.cfg.xml");
		SessionFactory sf = con.buildSessionFactory();
		Session s = sf.openSession();

		Transaction tx = s.beginTransaction();

		Employee ss = new Employee();
		ss.setEid(23);
		ss.setFname("Shameer");
		ss.setSname("Muhammed");
		ss.setAge(45);

		s.saveOrUpdate(ss);
		s.flush();
		tx.commit();
		s.close();

	}

}
