package com.jwp.hibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class DeleteEmployee {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Configuration cfg=new Configuration();
		cfg.configure("hibernate.cfg.xml");
		SessionFactory sf=cfg.buildSessionFactory();
		Session s= sf.openSession();
		Transaction tx=s.beginTransaction();
		try{
		Employee e=(Employee)s.get(Employee.class, new Long(28));
		s.delete(e);
		 s.flush();
		tx.commit();
		
		s.close();
		}
			catch(IllegalArgumentException e){
				System.out.println("**********There is no such Record for Deletion***********");
			}
		
	}

}
