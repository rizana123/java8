package basics;


class EmployeeDetails{
	int eid;
	String ename;
	Address address;
	
	void insertEmployee(int eid, String ename,Address address){
		this.eid=eid;
		this.ename=ename;
		this.address=address;
		
	}
	
	void displayEmployee(){
		System.out.println(eid+ename+address.ano+address.street+address.city);
	}
	
}
public class Employee1 {
	public static void main(String[] args) {
		Address a1=new Address();
		Address a2=new Address();
		
		a1.insertAddress(120, "street1", "city1");
		a2.insertAddress(122, "street2", "city2");
		EmployeeDetails ed1=new EmployeeDetails();
		EmployeeDetails ed2= new EmployeeDetails();
		ed1.insertEmployee(11, "Rizana", a1);
		ed2.insertEmployee(12, "Razana", a2);
		
		ed1.displayEmployee();
		ed2.displayEmployee();
		
	}
}
