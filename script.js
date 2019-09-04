function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var title = document.getElementById("title").value;
    var message = document.getElementById("message").value;
    var error_msg = document.getElementById("error_msg");
    var text;
    
    error_msg.style.padding = "10px";

    if (name.length < 4){
        text = "name must be at least 4 characters"
        error_msg.innerHTML = text;
        return false;
    }

    if (email.indexOf("@") == -1 || email.length < 4){
        text = "please enter a valid email"
        error_msg.innerHTML = text;
        return false;
    }
    return false;
}