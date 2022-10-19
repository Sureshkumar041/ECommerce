// Login

var form = document.getElementById("form");
const mailid = document.getElementById("mailid");
const password = document.getElementById("password");


form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const mailinput = mailid.value.trim();
    const passwordinput = password.value.trim();
    // const valid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var array = JSON.parse(localStorage.getItem("Details")); // Stored SignUp Details
    var notvaliduser = 0, key = 0;

    var limit = array.length;
    console.log("Array Length: ",limit);

    if (mailinput === "") {
        setError(mailid, "Enter the mail address or User Name");
    } else {
        setSuccess(mailid, "");
        if (passwordinput == "") {
            setError(password, "Plz enter the password");
        } else {
            setSuccess(password, "");


            for(var i=0;i<limit;i++){
                if(mailinput==array[i].email){
                    key =1;
                    if(passwordinput == array[i].password){
                        setSuccess(password,"");
                        localStorage.setItem("Login User",mailinput);
                        alert("Login Successfully!");
                        window.location.href="dashboard.html";
                        break
                        console.log("s")
                    }else{
                        setError(password,"Invalid Passsword");
                    }
                }else if(mailinput==array[i].username){
                    key =1;
                    if(passwordinput == array[i].password){
                        alert("Login Successfully");
                        localStorage.setItem("Login User",mailinput);
                        window.location.href="dashboard.html";
                        break
                    }else{
                        setError(password,"Invalid Passsword");
                    }
                }
            }

            if(key == 0){
                setError(mailid,"Invalid Mail or User Name");
            }else{
                setSuccess(mailid,"");
            }
        }
    }


    function setError(input, message) {
        const formhead = input.parentElement;
        const paragraph = formhead.querySelector("p");
        formhead.className = "form-group.error";
        paragraph.innerText = message;
    }

    function setSuccess(input, message) {
        const formhead = input.parentElement;
        const paragraph = formhead.querySelector("p");
        formhead.className = "form-group.success"; //error css
        paragraph.innerText = message;
    }

}





// Old method 
            // array.forEach(element => {
            //     if ((mailinput == element.email || mailinput == element.username) && passwordinput == element.password) {
            //         //alert("Login Donee..");
            //         // window.location.assign("admin.html");
            //         console.log("Login Successfully");
            //         key = 2;
            //         //break
            //     }
            //     if (mailinput != element.email || mailinput != element.username  && passwordinput != element.password) {
            //         notvaliduser++;
            //         console.log(notvaliduser);\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var array = JSON.parse(localStorage.getItem("Details")); // Stored SignUp Details
    var notvaliduser = 0, key = 0;

    var limit = array.length;



            // if(key == 2){
            //     alert("Login Doneee");
            //     console.log("login");
            // }else if (notvaliduser == limit) {
            //     alert("Dont have account ");
            // }else{
            //     alert("Invalid user name or password");
            // }



            // array.forEach(index => {
            //     if(mailinput != index.email || !mailinput != index.username){
            //         //alert("User Name Already Exists");
            //         setError(mailid,"User name already exists");
            //     }else{
            //         alert('Trla');
            //     }
            //     //else{
            //     //     setSuccess(mailid,"");
            //     // }
            //     console.log(index.username);
            // });



            // array.forEach(element => {
            //     if(mailinput==element.email || mailinput==element.username){
            //         window.location.assign("admin.html");
            //     }
            // });




            // // User Validation 
            // array.forEach(element => {
            //     if (mailinput != element.email){
            //         if(mailinput != element.username){
            //             key++;
            //         }
            //     } 
            // });
            // if (key == limit) {
            //     setError(mailid, "Invalid mail or User Name");
            // } else {
            //     setSuccess(mailid, "");
            // }

            // // Password Validation
            // array.forEach(element => {
            //     if (passwordinput != element.password){
            //           key++;
            //     } 
            // });
            // if (key == limit) {
            //     setError(password, "Invalid Password");
            // } else {
            //     setSuccess(password, "");
            // }