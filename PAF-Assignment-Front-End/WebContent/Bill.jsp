<%@page import="com.Bill"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/Bill.js"></script>
</head>
<body>

<div class="container">
		<div class="row">
			<div class="col-6">
				<h1>Bill Management</h1>
				<form id="formBill" name="formBill">
					
					User Id: <input id="userId"
						name="userId" type="text"
						class="form-control form-control-sm"> <br> 
					Past Unit Read: <input
						id="pastUnitRead" name="pastUnitRead" type="text"
						class="form-control form-control-sm"> <br> 
					New Unit Read:
					<input id="newUnitRead" name="newUnitRead" type="text"
						class="form-control form-control-sm"> <br> 
						
					No of Units:
					<input id="noOfunits" name="noOfunits" type="text"
						class="form-control form-control-sm"> <br> 
						
					Unit Price:
					<input id="unitPrice" name="unitPrice" type="text"
						class="form-control form-control-sm"> <br> 
						
					Total Price:
					<input id="totalPrice" name="totalPrice" type="text"
						class="form-control form-control-sm"> <br> 
					
					<input id="btnSave" name="btnSave" type="button" value="Save"
						class="btn btn-primary"> <input type="hidden"
						id="hideUsageInformationIDSave" name="hideUsageInformationIDSave" value="">
				</form>
				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>
				<br>
				<div id="divBillGrid">
					<%
					Bill billObj = new Bill();
					out.print(billObj.readBills());
					%>
				</div>
			</div>
		</div>
	</div>
	

</body>
</html>