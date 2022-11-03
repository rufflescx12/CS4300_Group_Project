function displayGreeting(){
    var name = document.getElementById("name").value;
    window.alert("Hello " + name);
}
function display2Greeting(){
    var name = document.getElementById("name2").value;
    window.alert("Hello " + name);
}

function login(){
    const usernames = ["admin", "customer"];
    const passwords = ["admin1", "customer1"];
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    document.getElementById("result").innerHTML = "Hello World!";
    
    if(usernames.includes(username) && passwords.includes(password)){
        document.getElementById("result").innerHTML = "Successful LogIn";
    }else{
        document.getElementById("result").innerHTML = "Unsuccessful LogIn";
    }

}