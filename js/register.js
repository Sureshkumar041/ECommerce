// Register Page JavaScript

const form = document.getElementById("form");
const mailid = document.getElementById("mailid");
const username = document.getElementById("username");
const password = document.getElementById("password");
const cpassword = document.getElementById("confirmpassword");
const valid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const checkbox = document.getElementById("checkbox");


form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const mailinput = mailid.value.trim();
    const usernameinput = username.value.trim();
    const passwordinput = password.value.trim();
    const cpasswordinput = cpassword.value.trim();
    const checkboxinput = checkbox;
    var array = JSON.parse(localStorage.getItem("Details"));
    var no = 0;
    console.log(array);



    if (mailinput === "") {
        setError(mailid, "Plz fill the mail id");
    } else if (!valid.test(mailinput)) {
        setError(mailid, "Plz enter the valid mail id");
    } else {
        setSuccess(mailid, "");
        if (usernameinput === "") {
            setError(username, "Plz fill the user name");
        } else {
            setSuccess(username, "");
            if (passwordinput === "") {
                setError(password, "Plz fill the password");
            } else {
                setSuccess(password, "");
                if (cpasswordinput === "") {
                    setError(cpassword, "Plz fill the confirm password");
                } else {
                    setSuccess(cpassword, "");
                    if (passwordinput != cpasswordinput) {
                        setError(cpassword, "Passwords must be same");
                    } else {
                        setSuccess(cpassword, "");
                        if (checkboxinput.checked) {
                            var chkbox = "True";
                        } else {
                            var chkbox = "False";
                        }
                        if (array === null) {
                            let array = [];
                            let obj = {
                                email: mailinput,
                                username: usernameinput,
                                password: passwordinput,                         
                                terms: chkbox,
                                confirmpassword: cpasswordinput
                            };
                            array.push(obj);
                            localStorage.setItem("Details", JSON.stringify(array));
                            alert("Signed Successfully!");
                            window.location.href = "login.html";
                        } else {
                            for (var i = 0; i < array.length; i++) {
                                if (mailinput === array[i].email || usernameinput === array[i].username) {
                                    var no = 1;
                                    break
                                }
                            }

                            if (no === 0) {
                                let obj = {
                                    email: mailinput,
                                    username: usernameinput,
                                    password: passwordinput,
                                    terms: chkbox,
                                    counts: count,
                                    confirmpassword: cpasswordinput
                                };
                                array.push(obj);
                                console.log(array);
                                localStorage.setItem("Details", JSON.stringify(array));
                                alert("Signed Successfully!");
                                window.location.href = "login.html";

                            } else {
                                setError(button, "User Name & Email Id Already");
                            }
                        }
                    }
                }
            }
        }
    }
}


function setError(input, message) {
    const formhead = input.parentElement;
    const paragraph = formhead.querySelector("p");
    formhead.className = "form-group.error"; //error css
    paragraph.innerText = message;
}

function setSuccess(input, message) {
    const formhead = input.parentElement;
    const paragraph = formhead.querySelector("p");
    formhead.clasname = "form-group success";
    paragraph.innerText = message;

}
