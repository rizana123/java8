package com.riz.jaxb;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;

public class Marshall {
	
	public static void main(String args[]) {
		try {
			JAXBContext jc=JAXBContext.newInstance(Employee.class);
			Marshaller mar=jc.createMarshaller();
			
			mar.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
			
			Employee e1=new Employee();
			e1.setId(1);
			e1.setEmpname("Fasmina");
			e1.setEmpdesg("IT Manager");
			e1.setSalary(150);
			
			Employee e2=new Employee();
			e2.setId(2);
			e2.setEmpname("Isha");
			e2.setEmpdesg("IT engineer");
			e2.setSalary(160);
			
			try {
				mar.marshal(e1, new FileOutputStream("employee.xml"));
				mar.marshal(e2, new FileOutputStream("employee.xml"));
				System.out.println("Xml file created");
			} catch (FileNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		} catch (JAXBException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
