import styled from "styled-components";

import { date, genegateWeatherIconSrc } from "../../weather";
import { convertKtoC } from "../../weather";

import { RiCelsiusFill } from "react-icons/ri";

const CardContainer = styled.div`
  padding: 18px 10px;
  background-color: #1e213a;
  display: flex;

  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  min-height: 177px;
`;

const CardTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #e7e7eb;
  padding: 0;
  margin: 0;
`;

const MinMaxTempContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TempContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:last-of-type > p {
    color: #a09fb1;
  }
`;

const TempText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #e7e7eb;
`;

const CardIcon = styled.img`
  width: 56px;
`;

export const WeatherCard = ({ day, idx }) => {
  const { weather, dt, temp } = day;

  return (
    <CardContainer>
      <CardTitle>{idx === 0 ? "Tomorrow" : date(dt)}</CardTitle>
      <CardIcon src={genegateWeatherIconSrc(weather[0].icon)} />
      <MinMaxTempContainer>
        <TempContainer>
          <TempText>{convertKtoC(temp.max)}</TempText>
          <RiCelsiusFill color="#e7e7eb" />
        </TempContainer>
        <TempContainer>
          <TempText>{convertKtoC(temp.min)}</TempText>
          <RiCelsiusFill color="#a09fb1" />
        </TempContainer>
      </MinMaxTempContainer>
    </CardContainer>
  );
};
