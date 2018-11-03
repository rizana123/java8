import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class Final {
	public static void main(String args[]) {

		// Configure the hibernate configuration file to get the connection
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");

		// Open sessionFactory
		SessionFactory factory = cfg.buildSessionFactory();
		// Open Session
		Session s = factory.openSession();
		// Begin Transaction
		Transaction tx = s.beginTransaction();
		Games g = new Games();
		g.setId(1);
        g.setName("Soccer");
        g.setSpace(500);
        Rpg r = new Rpg();
        r.setId(2);
        r.setName("Carrom");
        r.setSpace(7000);
        Arcade a = new Arcade();
        a.setId(3);
        a.setName("Ludo");
        a.setSpace(600);
        s.save(g);
        s.save(r);
        s.save(a);
        s.flush();
        tx.commit();
	}
}
