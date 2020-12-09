async function getCity(data) {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4c8393fda0294090a4f195011200912&q=${data}`,
      {
        mode: 'cors'
      }
    );
    const city = await response.json();
    return city.forecast.forecastday[0].day
        
  } catch (error) {
    console.log(error)
  }
}

export default getCity;