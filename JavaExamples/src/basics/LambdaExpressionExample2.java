package basics;

@FunctionalInterface  //It is optional  
interface Drawable{  
    public void draw();  
}  

interface Drawable1{  
    public void draw();  
} 
  
public class LambdaExpressionExample2 {  
    public static void main(String[] args) {  
        int width=10;  
        int length=20;  
        //with lambda  
        Drawable d2=()->{  
            System.out.println("Drawing "+width);  
        };  
        d2.draw();  
        
        Drawable1 d1=()->{System.out.println("Drawing "+length);};
        d1.draw();
    }  
}  