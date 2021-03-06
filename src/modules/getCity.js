import openModalError from './openModalError';

async function getCity(cityInput) {
  let response;
  let data;
  try {
    response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4c8393fda0294090a4f195011200912&q=${cityInput}`,
      {
        mode: 'cors',
      });
    const city = await response.json();
    data = city.forecast.forecastday[0].day;
    return data;
  } catch (error) {
    openModalError();
  }
  return data;
}

export default getCity;