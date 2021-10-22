<<<<<<< Updated upstream

  /*
 deleteButton.onclick=function(){
=======
deleteButton.onclick=function(){
>>>>>>> Stashed changes
  let query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  results = JSON.parse(req.responseText)
  let message = results[0] + "<br />" + results[1] + "<br />" + results[2] + "<br />" + results[3] + "<br />" + results[4] 
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
*/

buttonToDelete.onclick=function(){
    found = false
    let customerDelete = inptDelete.value
    let query = "SELECT * FROM customer"   
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    results = JSON.parse(req.responseText)
    for (i = 0; i <= results.length - 1; i++) {
       console.log(`In array is ${results[i][1]}`)
       if (customerDelete == results[i][1]) 
            found = true
            }
    console.log(`found is ${found}`)
    if (found == false) 
       deleteCustomerLabel.textContent = "That customer is not in the database."
    else if (found == true) {
      query = "DELETE FROM customer WHERE name = " + '"' + customerDelete + '"'
       req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)     
       deleteCustomerLabel.textContent = "Customer was successfully deleted, press 'Show Customer' button to see updated list. "
            }
      
}
<<<<<<< Updated upstream
*/
=======

>>>>>>> Stashed changes
