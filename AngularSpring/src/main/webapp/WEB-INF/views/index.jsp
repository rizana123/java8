<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<head>
<script type="text/javascript">
	var app=angular.module('myapp',[]);
	
	
	
	
app.controller("angularcontroller",['$scope','$window','$http',function($scope, $window, $http) {
	   $window.alert("i am here");
	$scope.SearchText="";
	$http({
		url:'/AngularSpring/user',
		method:'GET'
	}).then(function(response){
		console.log(response);
		$scope.employeelist=response.data;
		
	},function(errresponse){
		console.log("Error while fetching all Employees");
	});
		$scope.search=function(employee){
			var id=employee.empid.toString();
			if(id.includes($scope.SearchText) || employee.empname.includes($scope.SearchText)){
				return true;
			}
			return false;
		}
	}]);
</script>
</head>
<body ng-app="myapp" ng-controller="angularcontroller">
	<h2 align="center">Angular Spring List Employee Details</h2>
	<div class="container">
		<input type="text" ng-model="SearchText" placeholder="Search"
			class="form-control"></input>
		<table class="table table-bordered">
			<tr>
				<th>Employee Id</th>
				<th>Employee Name</th>
				<th>Department</th>
				<th>City</th>
				<th>DOB</th>
			</tr>
			<tr ng-repeat="employee in employeelist | filter:search">
				<td>{{employee.empid}}</td>
				<td>{{employee.empname}}</td>
				<td>{{employee.empdept}}</td>
				<td>{{employee.empcity}}</td>
				<td>{{employee.empdob}}</td>
			</tr>
		</table>
	</div>
</body>
</html>
