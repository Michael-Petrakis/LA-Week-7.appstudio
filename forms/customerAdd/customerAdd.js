
btnShowCustomerAdd.onclick=function(){
  let query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  results = JSON.parse(req.responseText)
  message = ""
  for (i = 0; i < results.length; i++)
    message = message + "<br />" + results[i][1]
  lblShowCustomerAdd.innerHTML = message
}



btnAddCustomer.onclick=function(){
  let customerName = inptAddCustomer.value
  let customerAddress = inptCustomerAddress.value
  let customerCity = inptCustomerCity.value
  let customerState = inptCustomerState.value
  let customerZip = inptCustomerZip.value
  let query = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('" + customerName + "', '" + customerAddress + "', '" + customerCity + "', '" + customerState + "', '" + customerZip + "')"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
}
