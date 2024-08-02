var container = document.querySelector(".container");
var cross = document.querySelector("#cross");
var deleteBtn = document.querySelector("#op");
var close = document.querySelector("#one-btn");
var head = document.querySelector(".head");

cross.addEventListener("click", function(){
    container.style.display = "none";
})

close.addEventListener("click", function(){
    container.style.display = "none";
})

function deleteId(){
    container.style.display = "none";
    deleteBtn.innerHTML = "Create Account";
    head.innerHTML = "Create New Account";
    alert("Account Deleted!");
}

function close(){
    container.style.display = "none";
}

deleteBtn.addEventListener("click", function(){
    if(deleteBtn.innerText === "Create Account"){
        container.style.display = "none";
    }
    else{
        container.style.display = "flex";
    }
})