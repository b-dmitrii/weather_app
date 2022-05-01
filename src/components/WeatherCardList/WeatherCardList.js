import styled from "styled-components";
import { WeatherCard } from "../WeatherCard/WeatherCard";

const WeatherCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 26px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 55px;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
    margin-top: 66px;
  }
`;

export const WeatherCardList = ({ data }) => {
  const weatherForFiveDay = data?.daily.slice(1, 6);

  return (
    <WeatherCardContainer>
      {weatherForFiveDay.map((day, idx) => (
        <WeatherCard day={day} key={day.dt} idx={idx} />
      ))}
    </WeatherCardContainer>
  );
};
