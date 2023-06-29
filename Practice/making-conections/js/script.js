var user_name = document.getElementById('user-name');
var request = document.querySelector('.circle.request');
var conections = document.querySelector('.circle.conections');
var circle_number = 2;
var conections_number = 418;

function profile(){
    user_name.innerText = "Fredy Arce";
}
// deleting request
const deleteButtons = document.querySelectorAll('.delete');
deleteButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.remove();
    circle_number --;
    request.innerText = circle_number;
  });
});
// accepting request
const acceptButtons = document.querySelectorAll('.accept');
acceptButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.remove();
    circle_number --;
    request.innerText = circle_number;
    conections_number ++;
    conections.innerText = conections_number;
  });
});

