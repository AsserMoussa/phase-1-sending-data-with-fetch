function submitData(name , email){

   
    return fetch("http://localhost:3000/users", {
     
    // Adding method type
    method: "POST",
     
    body: JSON.stringify({
        name: name,
        email: email
    }),
     
    // Adding headers to the request
    headers: {
        "Content-Type": "application/json", 
        "Accept" : "application/json"
    }
})
 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => {
    document.body.innerHTML = json.id})

   

   .catch (error =>{

    console.error("There has been a problem with your fetch operation:", error);
        document.body.innerHTML = error; 
   })
  }