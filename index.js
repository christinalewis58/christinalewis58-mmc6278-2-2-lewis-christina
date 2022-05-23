function greet(username) {
    var username = prompt("What is your name?");
    alert("Hello, " + username + ".");
    var userAge = prompt("How old are you?");
    var userAge = parseInt(userAge);

    var year = new Date().getFullYear();
    window.confirm("Have you had a birthday yet this year?");
    if (window.confirm == true) {
        alert(year - userAge);
    }  else  {
        alert(year - (userAge + 1));  
    }
}