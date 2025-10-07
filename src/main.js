function searchsubmit(event){
    event.preventDefault();
    let searchinput=document.querySelector('#searchinput').value;
    let city=document.querySelector('#city');
    city.innerHTML=searchinput;
    

}
let searchform=document.querySelector('#searchform');
searchform.addEventListener("submit",searchsubmit);

