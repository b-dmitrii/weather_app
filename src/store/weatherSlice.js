import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "a80cdc047f231292bb62958f503ebc6a";

export const loadWeatherByLocation = createAsyncThunk(
  "weatherByLocation/loadWeather",
  async (position) => {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${
          position.latitude || "55.7522"
        }&lon=${
          position.longitude || "37.6156"
        }&exclude=hourly&appid=${API_KEY}`
      )
      .then(({ data }) => {
        return data;
      });
  }
);

export const currentPosition = createAsyncThunk(
  "currentPosition/loadWeather",
  async (position) => {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          position.latitude || "55.7522"
        }&lon=${position.longitude || "37.6156"}&appid=${API_KEY}`
      )
      .then(({ data }) => {
        return {
          coord: data.coord,
          city: data.name,
          humidity: data.main.humidity,
          visibility: data.visibility,
          wind: data.wind,
          pressure: data.main.pressure,
        };
      });
  }
);

export const getPostionByCity = createAsyncThunk(
  "getPostionByCity/cityPosition",
  async (city) => {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      )
      .then(({ data }) => {
        return {
          latitude: data.coord.lat,
          longitude: data.coord.lon,
        };
      });
  }
);

const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: {},
    currentPosition: {},
    status: "",
    coord: {},
    searchHistory: [],
  },

  reducers: {
    getCurrentPosition: (state, action) => {
      state.coord = action.payload;
    },
    setSearchHistory: (state, action) => {
      state.searchHistory.push(action.payload);
    },
  },

  extraReducers: {
    [loadWeatherByLocation.pending]: (state) => {
      state.status = "loading";
    },
    [loadWeatherByLocation.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.data = action.payload;
    },
    [currentPosition.pending]: (state) => {
      state.status = "loading";
    },
    [currentPosition.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.currentPosition = action.payload;
    },
    [getPostionByCity.pending]: (state) => {
      state.status = "loading";
    },
    [getPostionByCity.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.coord = action.payload;
    },
  },
});

export const { getCurrentPosition, setSearchHistory } = WeatherSlice.actions;

export default WeatherSlice.reducer;
