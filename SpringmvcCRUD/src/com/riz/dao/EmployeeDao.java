package com.riz.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import com.riz.beans.Employee;


@Component
public class EmployeeDao {

	JdbcTemplate jdbcTemplate;

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	// Insert Employee
	public int insertEmp(Employee emp) {
		System.out.println("got Databse connection");
		System.out.println("inside Insert Employee");
		String sql = "insert into users(FirstName,LastName,Email)" + "values('" + emp.getFirstName() + "','"
				+ emp.getLastName() + "','" + emp.getEmail() + "')";
		return jdbcTemplate.update(sql);
	}

	// Update Employee
	public int updateEmp(Employee emp) {

		String sql = "update users set FirstName=" + emp.getFirstName() + ",LastName=" + emp.getLastName() + ""
				+ ",email=" + emp.getEmail() + "where Id=" + emp.getId() + ")";
		return jdbcTemplate.update(sql);
	}

	// Delete Employee
	public int deleteEmp(Employee emp) {

		String sql = "delete from users where Id=" + emp.getId() + ")";
		return jdbcTemplate.update(sql);
	}

	// Retrieve Employee
	public List<Employee> getEmployees() {
		System.out.println("inside select Employee");
		String sql = "select * from users";
		return jdbcTemplate.query(sql, new RowMapper<Employee>() {

			@Override
			public Employee mapRow(ResultSet rs, int row) throws SQLException {
				// TODO Auto-generated method stub

				Employee emp = new Employee();
				emp.setId(rs.getInt(1));
				emp.setFirstName(rs.getString(2));
				emp.setLastName(rs.getString(3));
				emp.setEmail(rs.getString(4));
				return emp;
			}

		});

	}

}
