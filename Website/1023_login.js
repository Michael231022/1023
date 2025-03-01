/* ======================================================================
Login System
====================================================================== */
// Loop through Array of Objects
var objPeople = [
    { // Object @ 0 index
        username: "michael",
        password: "michael0918"
    },
    { // Object @ 1 index
        username: "JingJune",
        password: "Jingjune24"
    },
    { // Object @ 2 index
        username: "bugfix",
        password: "bugfix123"
    }   
]

function getform1() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    const error_box = document.getElementById("error_content");
    function errorbox() {
        error_box.innerHTML = 'Incorrect username of password.'
        error_box.style.display = "flex";
        setTimeout(() => {
            error_box.style.display = "none";
        }, 1500);
    }

    for(var i = 0; i < objPeople.length; i++) {
        // check is user input matches username and password of a current index of the objPeople array
        if(username == objPeople[i].username && password == objPeople[i].password) {
            window.location.replace("1023.html");
            console.log(username + " is logged in.");
            // stop the function if this is found to be true
            return
        }

        else if (username == '' && password == '') {
            errorbox()
            error_box.innerHTML = 'Please enter username and password.';
            console.log("Please enter Username and Password.");
            return
        }

        else if (username == username && password == '') {
            errorbox()
            error_box.innerHTML = 'Please enter your password.';
            console.log("Please enter Your Password.");
            return
        }

        else if (username == '' && password == password) {
            errorbox()
            error_box.innerHTML = 'Please enter your username.';
            console.log("Please enter Your Username.");
            return
        }
    }

        /*** Error Box ***/
        errorbox()
        console.log("Incorrect Username or Password");
        this.password.value = '';

}

document.getElementById("username").addEventListener("keydown", function(){
    if(event.key === "Enter") {
        getform1();
    }
});

document.getElementById("password").addEventListener("keydown", function(){
    if(event.key === "Enter") {
        getform1();
    }
})

function stopback() {
    window.history.forward();
}




/* ======================================================================
Change Icon
====================================================================== */
var avatar = document.getElementById('avatar');
var waffle = document.getElementById('user_waffle');
var broccoli = document.getElementById('user_broccoli');
var username_input = document.getElementById('username');


username_input.addEventListener("keyup", function(){
    var username_value = username_input.value;

    if(username_value == 'michael') {
        avatar.style.display = 'none';
        waffle.style.display = 'block';
        waffle.classList.add('rotateY');
    }
    else if (username_value == 'JingJune') {
        avatar.style.display = 'none';
        broccoli.style.display = 'block';
        broccoli.classList.add('rotateY');
    }

    else {
        avatar.style.display = 'block';
        waffle.style.display = 'none';
        waffle.classList.remove('rotateY');
        broccoli.style.display = 'none';
        broccoli.classList.remove('rotateY');
    }
})
