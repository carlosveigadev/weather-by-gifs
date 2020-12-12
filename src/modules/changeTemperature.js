function changeTemperature(data) {
  const maxTemperature = document.getElementById('maxTemperature');
  const minTemperature = document.getElementById('minTemperature');
  const avgTemperature = document.getElementById('avgTemperature');

  if (avgTemperature.innerText.includes('°C')) {
    avgTemperature.innerText = `${data.avgtemp_f}°F`;
    maxTemperature.innerText = `${data.maxtemp_f}°F`;
    minTemperature.innerText = `${data.mintemp_f}°F`;
  } else {
    avgTemperature.innerText = `${data.avgtemp_c}°C`;
    maxTemperature.innerText = `${data.maxtemp_c}°C`;
    minTemperature.innerText = `${data.mintemp_c}°C`;
  }
}

export default changeTemperature;