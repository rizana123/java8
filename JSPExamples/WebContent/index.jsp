<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form action="welcome" method="post">  
<p>Enter Your Name :<input type="text" name="uname">  
<%@include  file="otherdetails.jsp"	 %>
<%-- <%response.sendRedirect("http://google.com"); %> --%>
<jsp:forward page="http://google.com" />  
<input type="submit" value="go"><br/>  
</form>  
</body>
</html>