package basics;
class AccountSoftware{
	int accno;
	String accname;
	float amount;
	
	void insert(int ano,String aname,float amt){
		accno=ano;
		accname=aname;
		amount=amt;
		
	}
	
void deposit(float amt){
	amount=amount+amt;
	System.out.println("Amount Deposited  ="+amt);
	
}
	
	void withdraw(float amt){
		if(amount<amt){
			System.out.println("Insufficient Balance");
		}
		else{
			
			amount=amount-amt;
			System.out.println("Amount Withdrawn  ="+amt);
			
		}
	}
	void checkBalance(){
		
		System.out.println("Your Balance is  ="+amount);
	}
	void displayAccount(){
		System.out.println("Account No ="+accno);
		System.out.println("Account Name ="+accname);
		System.out.println("Amount ="+amount);
		
	}
}
public class Account {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		AccountSoftware a=new AccountSoftware();
		a.insert(123, "Zayan",20000);
		a.displayAccount();
		a.deposit(5000);
		a.displayAccount();
		a.withdraw(2000);
		a.displayAccount();
		a.deposit(7000);
		a.checkBalance();
	}

}
