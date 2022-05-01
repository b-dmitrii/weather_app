import { Oval } from "react-loader-spinner";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Loader } from "../Loader/Loader";
import { TemperatureSwitcher } from "../TemperatureSwitcher/TemperatureSwitcher";
import { TodayHightlights } from "../TodayHightlights/TodayHightlights";
import { WeatherCardList } from "../WeatherCardList/WeatherCardList";

const MainContainer = styled.section`
  background-color: #100e1d;
  overflow-y: auto;
  padding: 52px 23px;

  @media (min-width: 1280px) {
    padding: 42px 95px;
    height: 100vh;
  }
`;

export const MainContent = () => {
  const { data, currentPosition } = useSelector((state) => state.weather);

  return (
    <MainContainer>
      <TemperatureSwitcher />
      {Object.keys(data).length !== 0 ? (
        <>
          <WeatherCardList data={data} />
          <TodayHightlights currentPosition={currentPosition} />
        </>
      ) : (
        <Loader>
          <Oval
            color="#3441bd"
            secondaryColor="#f0f0f5"
            strokeWidth={1}
            height={120}
            width={120}
          />
        </Loader>
      )}
    </MainContainer>
  );
};
