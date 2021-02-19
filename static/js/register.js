
async function Register(){
    let uname = document.getElementById("UserName").value;
    let upass = document.getElementById("Password").value;
    if(uname==" "&&upass== ""){
        alert("please enter user name or password");
        return 
    }
    let RegObj = {
        email:uname,
        password:upass
    }
    

    

    /*
    var raw = JSON.stringify(RegObj);
   var requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow',
    headers:{"content-type":"application/json"}
    
  };
  fetch("https://whispering-journey-12121.herokuapp.com/http://anyservice.imassoft.com/78/register", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
 */


 // Put the object into storage
 localStorage.setItem('User_Info', JSON.stringify(RegObj));

 // Retrieve the object from storage
 var retrievedObject = localStorage.getItem('User_Info');
 //if you want to use it again you must make it json  
 console.log('User_Info: ', JSON.parse(retrievedObject));

    
 }
 

 

 