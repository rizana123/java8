import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JdbcMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		try {
			// Open Jdbc Connection
			Class.forName("com.mysql.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/employees", "root", "password");
			Statement st=con.createStatement();
			ResultSet rs=st.executeQuery("Select * from emp_details");
			System.out.println("******************Got Connection**********************");
			while(rs.next()){
				System.out.println(rs.getString(1)+"****************"+rs.getString(2)+"****************"+rs.getString(3));
			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
