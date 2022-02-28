function validate(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    
    if(user == "bombercaldo" && pass == "bombercaldo"){
        window.location = "index.html";
    }else{
        var alert = document.getElementById("alert");
        alert.innerHTML = "!!! Username o Password errati !!!"
        alert.classList.add("alert");
    }
    document.getElementById("user").value = ""
    document.getElementById("pass").value = ""
}
