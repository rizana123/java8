<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%String user=request.getParameter("uname"); %>
<p> Welcome to Jsp Tutorial <%=user %>

<p> Welcome to Jsp Tutorial <%=request.getParameter("uname") %>

<p>Database used :<%=config.getInitParameter("DatabaseName") %>

<%session.setAttribute("usersession", user); %>
<a href="next.jsp" >Click here</a>
</body>
</html>