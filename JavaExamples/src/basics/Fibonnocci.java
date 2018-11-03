package basics;

public class Fibonnocci {
	public static void main(String[] args) {
		
		int i=0,j=1,k,count=10;
		System.out.print(i+"--"+j);
		for(int m=2;m<count;m++)
		{
			k=i+j;
			System.out.print("--"+k);
			i=j;
			j=k;
		
			
		}
	}
}
