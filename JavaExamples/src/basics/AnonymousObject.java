package basics;


class Factorial
{
	
	
	void findFact(int n){
		int fact=1;
	for (int i=1;i<=n;i++){
		fact=fact*i;
	}
	System.out.println("The Factorial is  =="+fact);
	}
}
public class AnonymousObject {

	public static void main(String[] args) {
		
		new Factorial().findFact(5);// Anonymous object is object without reference variable
		// TODO Auto-generated method stub

	}

}
