const temperature = document.querySelector('.temperature');
    const condition = document.querySelector('.condition');
    const wind = document.querySelector('.wind');
    const heading = document.querySelector('h3')
    const apiKey = "56822e88666e4cd888250338252708"; 
    const getfacts = async () => {
        const city = document.querySelector('#city').value; 
        const URL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
        try {
            console.log("Request URL:", URL);
            const response = await fetch(URL);            
            const data = await response.json();
            console.log("API Data:", data);
            heading.innerHTML = `<h3>Weather in ${data.location.name}, ${data.location.country}</h3>`;
            temperature.innerHTML = `<p> ${data.current.temp_c}°C`;
            condition.innerHTML =`<p>🌤 Condition: ${data.current.condition.text}`;
            wind.innerHTML =`<p>💨Wind : ${ data.current.wind_kph }<p>` ;
        } catch (error) {
            heading.innerHTML = '<p style="color:red">Something went wrong!</p>';
        }
    }