$(document).ready(function()
{ 

 $("#alertSuccess").hide(); 
 $("#alertError").hide(); 
}); 


$(document).on("click", "#btnSave", function(event)
{ 
	alert("Ramesh");
// Clear alerts---------------------
 $("#alertSuccess").text(""); 
 $("#alertSuccess").hide(); 
 $("#alertError").text(""); 
 $("#alertError").hide(); 
 
 
// Form validation-------------------
var status = validateUsageForm(); 
if (status != true) 
 { 
 $("#alertError").text(status); 
 $("#alertError").show(); 
 return; 
 } 


// If valid------------------------
var type = ($("#hideBillIDSave").val() == "") ? "POST" : "PUT"; 
 $.ajax( 
 { 
 url : "BillAPI", 
 type : type, 
 data : $("#formBill").serialize(), 
 dataType : "text", 
 complete : function(response, status) 
 { 
 onUsageInformationSaveComplete(response.responseText, status); 
 } 
 }); 
});

function onUsageInformationSaveComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully saved."); 
 $("#alertSuccess").show(); 
 $("#divUsageInformationGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while saving."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while saving.."); 
 $("#alertError").show(); 
 }
$("#hideUsageInformationIDSave").val(""); 
$("#formUsageInformation")[0].reset(); 
}


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
		{ 
		$("#hideUsageInformationIDSave").val($(this).data("bid")); 
		 $("#userId").val($(this).closest("tr").find('td:eq(0)').text()); 
		 $("#pastUnitRead").val($(this).closest("tr").find('td:eq(1)').text()); 
		 $("#newUnitRead").val($(this).closest("tr").find('td:eq(2)').text()); 
		 $("#noOfunits").val($(this).closest("tr").find('td:eq(3)').text()); 
		 $("#unitPrice").val($(this).closest("tr").find('td:eq(4)').text());
		 $("#totalPrice").val($(this).closest("tr").find('td:eq(5)').text());
		 
		});




$(document).on("click", ".btnRemove", function(event)
		{ 
		 $.ajax( 
		 { 
		 url : "BillAPI", 
		 type : "DELETE", 
		 data : "usageID=" + $(this).data("bid"),
		 dataType : "text", 
		 complete : function(response, status) 
		 { 
			 onUsageInformationDeleteComplete(response.responseText, status); 
		 } 
		 }); 
		});
		
function onUsageInformationDeleteComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully deleted."); 
 $("#alertSuccess").show(); 
 $("#divUsageInformationGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while deleting."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while deleting.."); 
 $("#alertError").show(); 
 } 
}


// CLIENT-MODEL================================================================
function validateUsageForm()
{

	// User ID
	if ($("#userId").val().trim() == "")
	{
	return "Insert User ID.";
	
    }
	// Past Unit Read
	if ($("#pastUnitRead").val().trim() == "")
	{
	return "Insert Previous Unit Read.";
	}
	// New Unit Read
	if ($("#newUnitRead").val().trim() == "")
	{
	return "Insert New Unit Read.";
	
    }
	// No of units
	if ($("#noOfunits").val().trim() == "")
	{
	return "Insert No of Units.";
	
    }
	// Unit price
	if ($("#unitPrice").val().trim() == "")
	{
	return "Insert Unit Price.";
	
    }
	// Total Price
	if ($("#totalPrice").val().trim() == "")
	{
	return "Insert total price.";
	
    }

	return true;
}