<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>List of Employees</h1>

	<table width="70%" border="3" cellpadding="3">
		<tr>
			<th>Id</th>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Email</th>
			<th>Edit</th>
			<th>Delete</th>
		</tr>

		<c:forEach var="emp1" items="${list}">
			<tr>
				<td>${emp1.id}</td>
				<td>${emp1.firstName}</td>
				<td>${emp1.lastName}</td>
				<td>${emp1.email}</td>
				<td><a href="">Edit</a></td>
				<td><a href="">Delete</a></td>
				
			</tr>
		</c:forEach>



		</tr>
	</table>

</body>
</html>