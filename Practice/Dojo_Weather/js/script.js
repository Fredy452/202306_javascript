var list = document.querySelectorAll('li');
list.forEach(item =>{
    item.addEventListener('click', () =>{
        alert("Loading weather report");
        console.log("clicking")
    })
})

function removeCookie(element){
    element.parentElement.parentElement.remove();
}

var celcius = [
    [24,18],
    [27,19],
    [21,16],
    [26,21]
];
var farenheit = [
    [75,65],
    [80,66],
    [69,61],
    [78,70]
];
var temperature = document.querySelectorAll('.temperature');
var selectElement = document.getElementById('check');
selectElement.addEventListener('change', () =>{
    var selectedValue = selectElement.value;
    if (selectedValue === 'celcius') {
        changeTemperature(celcius);
    } else if(selectedValue === 'farenheit'){
        changeTemperature(farenheit);
    }
});

function changeTemperature(array){
    temperature.forEach((item, index) =>{
        var max = item.querySelector(".max");
        var min = item.querySelector(".min");

        max.textContent = array[index][0]+"°";
        min.textContent = array[index][1]+"°";
    });
}



