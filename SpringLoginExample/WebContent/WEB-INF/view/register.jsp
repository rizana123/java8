<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<form:form action="/SpringLoginExample/registerSuccess" modelAttribute="student" method="post">
		<table align="center">
			<caption align="top">Student registration form</caption>
			<tr>
				<td>Enter Email:</td>
				<td><form:input path="email" /></td>
				<td><form:errors path="email" cssClass="error" /></td>
			</tr>
			<tr>
				<td>Enter Password:</td>
				<td><form:password path="password" /></td>
				<td><form:errors path="password" cssClass="error" /></td>
			</tr>

			<tr>
				<td>Enter your Name:</td>
				<td><form:input path="name" /></td>
				<td><form:errors path="name" cssClass="error" /></td>
			</tr>

			<tr>
				<td>Enter Phone No:</td>
				<td><form:input path="phone" /></td>
				<td><form:errors path="phone" cssClass="error" /></td>

			</tr>

			<tr>
				<td>Gender:</td>
				<td><form:radiobutton path="gender" value="Male" label="Male" />
					<form:radiobutton path="gender" value="Female" label="Female" /></td>
				<td><form:errors path="gender" cssClass="error" /></td>

			</tr>

			<tr>
				<td>Select Technology:</td>
				<td><form:select path="technology">
						<form:options items="${technologyList}" />
					</form:select></td>
				<td><form:errors path="technology" cssClass="error" /></td>

			</tr>



			<tr>
				<td><input type="submit" value="Register"></td>
			</tr>
		</table>

	</form:form>
</body>
</html>