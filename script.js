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

    if (title.length < 4){
        text = "title must be at least 4 characters"
        error_msg.innerHTML = text;
        return false;
    }

    if (message.length < 20){
        text = "message must be at least 20 characters"
        error_msg.innerHTML = text;
        return false;
    }

    alert("Form Submitted Successfully")
    return true;
}