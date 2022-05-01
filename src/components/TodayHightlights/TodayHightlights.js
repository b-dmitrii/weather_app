import styled from "styled-components";
import { convertMtoMi, windDirection } from "../../weather";
import { FaLocationArrow } from "react-icons/fa";

const TodayHightlightsContainer = styled.div`
  margin-top: 72px;
`;

const TodayHightlightsTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #e7e7eb;
  margin-bottom: 32px;
`;

const TodayHightlightsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  gap: 48px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  & > :nth-child(-n + 2) > p {
    margin-bottom: 30px;
  }
`;

const TodayHightlightsItem = styled.div`
  padding: 22px 0 35px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e213a;
`;

const TodayHightlightTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin: 0;
  margin-bottom: 7px;
  color: #e7e7eb;
`;

const TodayHightlightText = styled.p`
  font-weight: 700;
  font-size: 64px;
  line-height: 75px;
  color: #e7e7eb;
  margin: 0;

  & > span {
    font-size: 32px;
  }
`;

const HumidityContainer = styled.div`
  position: relative;
  width: 70%;
  height: 8px;
  background-color: #e7e7eb;
  border-radius: 80px;

  &::before {
    position: absolute;
    content: "%";
    right: 0;
    top: 10px;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #a09fb1;
  }
`;

const HumidityValue = styled.div`
  width: ${(props) => props.value + "%"};
  height: 100%;
  background-color: #ffec65;
  border-radius: 80px;
`;

const HumidityPercent = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;

  & > span {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #a09fb1;
  }
`;

const WindDirContainer = styled.div`
  display: flex;
  align-items: center;
`;

const WindDirIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  transform: rotate(${(props) => props.deg - 45 + "deg"});
  margin-right: 10px;
`;

const WindDirText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #e7e7eb;
`;
export const TodayHightlights = ({ currentPosition }) => {
  return (
    <TodayHightlightsContainer>
      <TodayHightlightsTitle>{"Today’s Hightlights"} </TodayHightlightsTitle>
      <TodayHightlightsList>
        <TodayHightlightsItem>
          <TodayHightlightTitle>Wind status</TodayHightlightTitle>
          <TodayHightlightText>
            {`${Math.round(currentPosition.wind?.speed)} `} <span>mph</span>
          </TodayHightlightText>
          <WindDirContainer>
            <WindDirIcon deg={currentPosition.wind?.deg}>
              <FaLocationArrow color="#e7e7eb" size={12} />
            </WindDirIcon>
            <WindDirText>
              {windDirection(currentPosition?.wind?.deg)}
            </WindDirText>
          </WindDirContainer>
        </TodayHightlightsItem>
        <TodayHightlightsItem>
          <TodayHightlightTitle>Humidity</TodayHightlightTitle>
          <TodayHightlightText>
            {`${currentPosition?.humidity} `} <span>%</span>
          </TodayHightlightText>
          <HumidityPercent>
            <span>0</span> <span>50</span> <span>100</span>
          </HumidityPercent>
          <HumidityContainer>
            <HumidityValue value={currentPosition?.humidity} />
          </HumidityContainer>
        </TodayHightlightsItem>
        <TodayHightlightsItem>
          <TodayHightlightTitle>Visibility</TodayHightlightTitle>
          <TodayHightlightText>
            {`${convertMtoMi(currentPosition.visibility)} `} <span>miles</span>
          </TodayHightlightText>
        </TodayHightlightsItem>
        <TodayHightlightsItem>
          <TodayHightlightTitle>Air Pressure</TodayHightlightTitle>
          <TodayHightlightText>
            {`${currentPosition.pressure} `} <span>mb</span>
          </TodayHightlightText>
        </TodayHightlightsItem>
      </TodayHightlightsList>
    </TodayHightlightsContainer>
  );
};
