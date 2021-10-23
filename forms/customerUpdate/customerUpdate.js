
btnShowCustomerUpdate.onclick=function(){
    let query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  results = JSON.parse(req.responseText)
  message = ""
  for (i = 0; i < results.length; i++)
    message = message + "<br />" + results[i][1]
  lblShowCustomerUpdate.innerHTML = message
}

btnUpdateCustomer.onclick=function(){
  let oldName = inptUpdateCustomer.value
  let newName = inptUpdateCustomerTo.value
  let query = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + oldName + '"'
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
}
