deleteCustomer.onshow=function(){
  txtTypeNames_contents.style.height = "200px"
}

 deleteButton.onclick=function(){
  let query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  results = JSON.parse(req.responseText)
  message = ""
  for (i = 0; i < results.length; i++)
    message = message + "<br />" + results[i][1]
  deleteLabel.innerHTML = message
} 
  
/*
  deleteCustomer = inptCustomer.value
  deleteCustomer = deleteCustomer.toLowerCase()
  if (deleteCustomer == 
  
  message = message = employees[i] + " " + employees[i+1] + "<br />"
  lblOutput.innerHTML = message
  
Button1.onclick=function(){
  
}


buttonToDelete.onclick=function(){
    let found = false
    let customerDelete = inptDelete.value
    let query = "SELECT * FROM customer"   
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    results = JSON.parse(req.responseText)
    for (i = 0; i <= results.length - 1; i++) {
       deleteCustomerLabel = (` results[i] is ${results[i]}`)
       if (customerDelete == results[i])
            found = true
}
*/

deleteCustomer.onshow=function(){
  
}
