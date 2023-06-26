var login = document.getElementById('login');
login.addEventListener("click", function(){
    login.innerHTML = "Logout";
})

var like = document.getElementById('like');
like.addEventListener("click", function(){
    like.innerHTML = "14 Like";
    alert("Ninja was liked")
})

var remove = document.getElementById('btn-def');
remove.addEventListener("click", function(){
    remove.remove();
})