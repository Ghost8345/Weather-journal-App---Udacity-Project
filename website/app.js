/* Global Variables */

const server = "http://localhost:8080";

const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";

// Use metric units ie. Celsius
const apiKey = "&appId=61caa58492750f6277fcc316dbb99cde&units=metric";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const getWeather = async (zip) => {
    const res = await fetch(baseURL + zip + apiKey);
    try {
        const data = await res.json();
        if(data.cod != 200){
            alert("Please Enter valid Zip Code");
            throw error;
        }
        console.log("Get:");
        console.log(data);
        return data;
    }
    catch(error) {
        console.log(error);
    }
};

const postData = async (url = "", data = {}) => {
    const req = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(data),
    });
  
    try {
      const newData = await req.json();
      console.log(" Post: ");
      console.log(newData);
      return newData;
    }
    catch (error) {
      console.log(error);
    }
  };

  const updateUI = async () => {
    const request = await fetch(server + "/all");
    try {
        const data = await request.json();
        console.log("Update: ")
        console.log(request);
        console.log(data);
        document.getElementById("date").innerHTML = "Date: " + data.date;
        document.getElementById("temp").innerHTML = "Temperature: " + data.temp;
        document.getElementById("content").innerHTML = "Feeling: " + data.content;
        document.getElementById("location").innerHTML = "City: " + data.location;
    }
    catch (error) {
        console.log("error", error);
    }
};

const generate = (e) => {
    e.preventDefault();
    const zip = document.querySelector("#zip").value;
    const content = document.querySelector("#feelings").value;
    getWeather(zip)
    .then( (data) => {
        postData(server + "/generate", {date: newDate, temp: data.main.temp.toString() + " °C", content: content, location: data.name})
        .then( (newData) => updateUI())
    })
}

document.getElementById("generate").addEventListener("click", generate);