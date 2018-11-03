package basics;


class Employee{
	int eid;
	String ename;
	
	
	void insertEmployee(int id, String name){
		
		eid=id;
		ename=name;
		
	}
	
	void displayEmployee(){
		System.out.println("Employee Number =="+eid);
		System.out.println("Employee Name   =="+ename);
		
	}
}
public class MethodInitialization {
	

	public static void main(String[] args) {
		Employee e1=new Employee();
		Employee e2=new Employee();
		
		e1.insertEmployee(100, "Rizana");
		e2.insertEmployee(101, "Shajid");
		
		e1.displayEmployee();
		e2.displayEmployee();
		
	}
}
