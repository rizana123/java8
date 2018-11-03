package com.jwp.hibernate;



import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.exception.ConstraintViolationException;


public class InsertEmployee {

	public static void main(String args[]) {

		// Configure the hibernate configuration file to get the connection
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");

		// Open sessionFactory
		SessionFactory factory = cfg.buildSessionFactory();
		// Open Session
		Session session = factory.openSession();
		// Begin Transaction
		Transaction tx = session.beginTransaction();
		// Create Student object and Make insertion of Student details
		Employee student = new Employee();
		Employee student1 = new Employee();

		try{
		// First Record
		student.setEid(27);
		student.setFname("Isha");
		student.setSname("Fathima");
		student.setAge(8);

		// Second Record
		student1.setEid(28);
		student1.setFname("Muhammed");
		student1.setSname("Zayan");
		student1.setAge(5);

		// Save session and commit the transaction
		session.save(student);
		session.save(student1);
		session.flush();
		tx.commit();
		session.close();
		}
		catch(Exception e){
			System.out.println("*************Some Exception Occured*****************");
		}
		System.out.println("Student saved successfully");

	}
}
