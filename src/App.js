import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { currentPosition, loadWeatherByLocation } from "./store/weatherSlice";
import { WeatherPreviewBar } from "./components/WeatherPreviewBar/WeatherPreviewBar";
import { MainContent } from "./components/MainContent/MainContent";

import "./App.css";
import { SearchNavBar } from "./components/SearchNavBar/SearchNavBar";

function App() {
  const dispatch = useDispatch();

  const [searchClick, setSearchClick] = useState(false);
  const { coord } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(loadWeatherByLocation(coord));
    dispatch(currentPosition(coord));
  }, [dispatch, coord]);

  return (
    <div className="App">
      {searchClick ? (
        <SearchNavBar setSearchClick={setSearchClick} />
      ) : (
        <WeatherPreviewBar setSearchClick={setSearchClick} />
      )}
      <MainContent />
    </div>
  );
}

export default App;
