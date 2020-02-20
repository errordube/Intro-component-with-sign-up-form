function validateEmail() {
    var emailText = document.querySelector('.email').value;
    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    if (emailText === pattern.test(emailText)) {
        return true;
    } else {
        // alert('Please provide a valid email: ' + emailText);
        document.querySelector(".email-error").innerHTML = "Looks likes this is not email";
        document.querySelector(".email").style.border = "1px solid hsl(0, 100%, 74%)";
        document.querySelector(".icon-error").style.display = "block";
        return false;
    }
}



window.onload = function() {
    document.querySelector('form').onsubmit = validateForm;
}


document.querySelector('form').onsubmit = validateEmail;
