var buttons = document.querySelectorAll(".like");
var like = document.getElementById('plus');
var like1 = document.getElementById('plus1');
var like2 = document.getElementById('plus2');
var num1 = 9;
var num2 = 12;
var num3 = 9;

buttons.forEach((btn, index) =>{
    btn.addEventListener("click", ()=>{
        if (index == 0) {
            num1++;
            like.innerHTML = '<span class="plus">'+num1+'</span>';
        }
        if (index == 1) {
            num2++;
            like1.innerHTML = '<span class="plus">'+num2+'</span>';
        }
        if (index == 2) {
            num3++;
            like2.innerHTML = '<span class="plus">'+num3+'</span>';
        }
    })
})