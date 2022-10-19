// Login user name 

var loginuser = localStorage.getItem("Login User");
document.getElementById("name").innerHTML = loginuser;

// Data Heading

var infomation = JSON.parse(localStorage.getItem("Details"));
var size = infomation.length;

// Infomation Needs

var heading = ["Email Id", "User Name", "Password","Status","Count","Action"];
var need = ["email","username","password","terms","count"];

// J = Row , K = Column

// var table = document.getElementById("table");
// for (var j = 0; j < 1; j++){
//     // var header = table.createTHead();
//     var newrow = table.insertRow();
//     for (var k = 0; k < heading.length; k++) {
//         var cell = newrow.insertCell(k);
//         cell.innerHTML = heading[k];
//     } 
// }

// i = Infomation Access 
// a = Infomation Needs
// var table = document.getElementById("table");
 
for(var i=0; i<size; i++){
    // var body = table.createTBody();
    var body = document.getElementById("tbody");
    var newrow = body.insertRow();
    for( var a =0; a<need.length; a++){
        cell = newrow.insertCell(a);
        cell.innerHTML= Object.values(infomation[i])[a];
    }
    cell = newrow.insertCell(a);
    cell.innerHTML = '<button class="btn btn-primary" onClick="onEdit(this)">Edit</button> <button class="btn btn-danger" onClick="onDelete(this)">Delete</button>'
}

function onEdit(t){
    // CSS Class need
    rowindex = t.parentNode.parentNode.rowIndex;
    console.log(rowindex);

    selectedrow = (t.parentNode.parentNode.rowIndex)-1;
    console.log(selectedrow);

    document.getElementById("email").value = infomation[selectedrow].email;
    document.getElementById("username").value = infomation[selectedrow].username;
    document.getElementById("password").value = infomation[selectedrow].password;
    document.getElementById("terms").value = infomation[selectedrow].terms;

}

function onDelete(t){

    // Table row
    rowindex = t.parentNode.parentNode.rowIndex;
    console.log(rowindex);

    // Local Storage Index
    selectedrow = (t.parentNode.parentNode.rowIndex)-1;
    console.log(selectedrow);

    if(confirm("Do you want to delete this record ?")){
    
        // Delete A Object From Local Storage
        infomation.splice(selectedrow,1);
        localStorage.setItem("Details",JSON.stringify(infomation));``
        console.log(infomation);
        
        //  Delete A Row From Table
        document.getElementById("table").deleteRow(rowindex);
    }
}                       



function onSave(){
    console.log("Update index: ", selectedrow);
    infomation[selectedrow].email = document.getElementById("email").value;
    infomation[selectedrow].username = document.getElementById("username").value;
    infomation[selectedrow].password = document.getElementById("password").value;
    infomation[selectedrow].terms = document.getElementById("terms").value;

    console.log(infomation);
    localStorage.setItem("Details", JSON.stringify(infomation));

    for( var a =0; a<need.length; a++){
        document.getElementById("table").rows[rowindex].cells[a].innerHTML = Object.values(infomation[selectedrow])[a];
    }
    cell = document.getElementById("tbody").rows[selectedrow].cells[a]
    console.log("For btn: ",cell);
    cell.innerHTML = '<button class="btn btn-primary" onClick="onEidt(this)">Edit</button> <button class="btn btn-danger" onClick="onDelete(this)">Delete</button>'

}

