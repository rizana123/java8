<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<style type="text/css">
.error {
	color: red;
}
</style>
</head>
<body>
	<h3 align="center">${headerMessage}</h3>
	<form:form action="/SpringMVCLoginMavenExample/loginSuccess" method="post" modelAttribute="loginCredentials">
		<table align="center">
			<tr align="center">
				<td>Enter Email:</td>
				<td><form:input path="email"></form:input></td>
				<td><form:errors path="email" cssClass="error"></form:errors></td>
			</tr>
			<tr align="center">
				<td>Enter Password:</td>
				<td><form:input path="password"></form:input></td>
				<td><form:errors path="password" cssClass="error"></form:errors></td>
			</tr>
			<tr align="center">
			<td></td>
			<td><input type="submit" value="Login"></td>
		</tr>
		</table>
		
	</form:form>

</body>
</html>