//Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const myButton = document.querySelector('#btnToClick');

myButton.addEventListener('click', myButtonClick);

function myButtonClick(event){
    console.log(event);
}