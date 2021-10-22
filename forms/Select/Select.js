let req = ""
let query = ""
let results = ""
let netID = "map40414"
let pw = "Password"


selectButton.onclick=function(){
  let query = "SELECT name FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  results = JSON.parse(req.responseText)
  selectLabel.textContent = results
  


}
