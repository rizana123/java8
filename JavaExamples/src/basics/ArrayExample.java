package basics;
public class ArrayExample {
	public static void main(String args[]) {
		//single dimension array
		int a[] = new int[5];
		a[0] = 1;
		a[1] = 2;
		a[2] = 3;
		a[3] = 4;
		a[4] = 5;
		int b[] = { 6, 7, 8, 9, 10 };

		//multi dimension array
		int c[][] = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };
		for (int i = 0; i < a.length; i++) {
			System.out.println(a[i]);
		}
		for (int i = 0; i < b.length; i++) {
			System.out.println(b[i]);
		}

		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				System.out.print(c[i][j] + "  ");
			}
			System.out.println();
		}
		
		System.out.println(a.getClass().getName().toString());
		System.out.println(c.getClass().getName().toString());
		
	}
}
