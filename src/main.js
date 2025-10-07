function searchcity(city){
    let apk="62b63b2t79f05a00f231dof1d4ddeeaa";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apk}&units=metric`;
    console.log(apiUrl);

}
function searchsubmit(event){
    event.preventDefault();
    let searchinput=document.querySelector('#searchinput').value;
    let city=document.querySelector('#city');
    city.innerHTML=searchinput;
    searchcity(searchinput);

}
let searchform=document.querySelector('#searchform');
searchform.addEventListener("submit",searchsubmit);

