package com.jwp.hibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class SelectEmployee {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		Configuration con= new Configuration();
		con.configure("hibernate.cfg.xml");
		SessionFactory sf=con.buildSessionFactory();
		Session s=sf.openSession();
		Transaction tx=s.beginTransaction();
		
		// Getting the record from database
		// can use load or get method
		// use load method if id exist for sure
		// use get method if id exits or not
		try{
		Employee emp =(Employee)s.get(Employee.class, new Long(23));
		System.out.println("Employee ID-----"+emp.getEid());
		System.out.println("Employee Fname-----"+emp.getFname());
		System.out.println("Employee Sname-----"+emp.getSname());
		System.out.println("Employee Age-----"+emp.getAge());
		}
		catch(NullPointerException n)
		{
			System.out.println("***********There is no record found with this id*************");
		}
		
		s.close();
	

}
}