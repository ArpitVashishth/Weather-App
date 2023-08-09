const apiKey = "db99ca5439cf9b9e3a80137c4d24df91";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".inputs input");
const searchBtn = document.querySelector(".inputs button");
const weatherIcon =document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }
    else{
        
    const res = await response.json();
    console.log(res);

    document.querySelector(".city").innerHTML = res.name;
    document.querySelector(".temperature").innerHTML = Math.round(res.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = res.main.humidity + "%";
    document.querySelector(".wind").innerHTML = res.wind.speed + " km/h";

    if(res.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";//.src ="image"; means any can change 
    }
    else if(res.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(res.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(res.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(res.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display ="block";
    document.querySelector(".error").style.display ="none";


    }

    }



searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value);
})

// I am explaining what should happens in this code First we create a Aync await function in this function we use fetch Weather Api and also we grab those element to display the weather App and we want to change according to property so we change and display in DOM according to this property okk..then we want if we entered any name of city look all properties like temp, wind,humidity etc so these are change accorfing to fetch api and also we grab a input and searchbtn that's why when we entered any city name in input filed then click on search btn that's why we write on eventlistner on searchbtn so when click on searchbtn then events call function inside the event...