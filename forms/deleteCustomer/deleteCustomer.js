



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
  

buttonToDelete.onclick=function(){
    found = false



buttonToDelete.onclick=function(){
    let found = false

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




