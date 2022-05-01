import Clear from "./assets/image/Clear.png";
import LightCloud from "./assets/image/LightCloud.png";
import HeavyCloud from "./assets/image/HeavyCloud.png";
import LightRain from "./assets/image/LightRain.png";
import Shower from "./assets/image/Shower.png";
import Thunderstorm from "./assets/image/Thunderstorm.png";
import Snow from "./assets/image/Snow.png";

const weather = {
  "01d": Clear,
  "01n": Clear,
  "02d": LightCloud,
  "02n": LightCloud,
  "03d": HeavyCloud,
  "03n": HeavyCloud,
  "04d": HeavyCloud,
  "04n": HeavyCloud,
  "09d": LightRain,
  "09n": LightRain,
  "10d": Shower,
  "10n": Shower,
  "11d": Thunderstorm,
  "11n": Thunderstorm,
  "13d": Snow,
  "13n": Snow,
};

export const genegateWeatherIconSrc = (icon) => {
  return weather[icon];
};

export const date = (dt) =>
  new Date(dt * 1000).toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

export const convertKtoC = (k) => {
  const converter = k - 273.15;
  return Math.round(converter);
};

export const convertKtoF = (k) => {
  const converter = ((k - 273.15) * 9) / 5 + 32;
  return Math.round(converter);
};

export const convertMtoMi = (m) => {
  const converter = m / 1609;
  return converter.toFixed(1);
};

export const windDirection = (deg) => {
  if (deg === 360) {
    return "N";
  } else if (deg > 315 && deg < 360) {
    return "NNW";
  } else if (deg === 315) {
    return "NW";
  } else if (deg > 270 && deg < 315) {
    return "WNW";
  } else if (deg === 270) {
    return "W";
  } else if (deg > 225 && deg < 270) {
    return "WSW";
  } else if (deg === 225) {
    return "SW";
  } else if (deg > 180 && deg < 225) {
    return "SSW";
  } else if (deg === 180) {
    return "S";
  } else if (deg > 135 && deg < 180) {
    return "SSE";
  } else if (deg === 135) {
    return "SE";
  } else if (deg > 90 && deg < 135) {
    return "ESE";
  } else if (deg === 90) {
    return "E";
  } else if (deg > 45 && deg < 90) {
    return "ENE";
  } else if (deg === 45) {
    return "NE";
  } else if (deg > 0 && deg < 45) {
    return "NNE";
  }
};
