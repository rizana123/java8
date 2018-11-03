package basics;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

class Product{
	
	int id;
	String pname;
	float pprice;
	public Product(int id,String pname,float pprice){
		this.id=id;
		this.pname=pname;
		this.pprice=pprice;
	}
	
}

public class LambdaExpressionFilter {
	
	public static void main(String args[])
	{
		List<Product> plist=new ArrayList<Product>();
		plist.add(0, new Product(1, "aaa", 20000));
		plist.add(0, new Product(2, "bbb", 30000));
		plist.add(0, new Product(3, "ccc", 15000));
		plist.add(0, new Product(4, "ddd", 47000));
		plist.add(0, new Product(5, "eee", 10000));
		
		
		Stream<Product> pstream=plist.stream().filter(p->p.pprice>20000);
		
		pstream.forEach(n->System.out.println(n.pname+"  "+n.pprice));
		
	}

}
