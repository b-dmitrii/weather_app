import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MdGpsFixed } from "react-icons/md";
import { RiCelsiusFill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { convertKtoC, date, genegateWeatherIconSrc } from "../../weather";
import { Oval } from "react-loader-spinner";
import { Loader } from "../Loader/Loader";
import { usePosition } from "use-position";
import { getCurrentPosition } from "../../store/weatherSlice";

const Container = styled.div`
  padding: 18px 11px;
  background-color: #1e213a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  @media (min-width: 1280px) {
    padding: 42px 46px;
    height: 100vh;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchButton = styled.button`
  padding: 11px 18px;
  background-color: #6e707a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #e7e7eb;
  font-size: 16px;
  line-height: 19px;
  border-radius: 0;
  border: none;
  text-transform: none;
  &:hover {
    background-color: #828388;
  }
`;

const GeolocationButton = styled.div`
  background-color: #6e707a;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #828388;
  }
`;

const WeatherIcon = styled.img`
  display: block;
  margin: 0 auto;
`;

const TemperatureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Temperature = styled.p`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 144px;
  line-height: 169px;
  color: #e7e7eb;
  margin: 0;
`;

const Weather = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
  color: #a09fb1;
  font-family: "Raleway", sans-serif;
  margin: 0;
  padding: 0;
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DateText = styled.p`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #88869d;
  margin: 0;
  padding: 0;

  &:first-of-type::after {
    content: "";
    border-right: 1px solid #88869d;
    margin: 0 16px;
  }
`;

const CityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CityText = styled.p`
  color: #88869d;
  margin-left: 4px;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  margin: 0;
`;

export const WeatherPreviewBar = ({ setSearchClick }) => {
  const position = usePosition();
  const dispatch = useDispatch();
  const { data, currentPosition } = useSelector((state) => state.weather);

  const Data = {
    icon: data?.current?.weather[0]?.icon,
    main: data?.current?.weather[0]?.main,
    temperature: data?.current?.temp,
    city: currentPosition?.city,
    date: data?.current?.dt,
  };

  return (
    <Container>
      <MenuContainer>
        <SearchButton onClick={() => setSearchClick(true)}>
          Search for places
        </SearchButton>
        <GeolocationButton
          onClick={() => dispatch(getCurrentPosition(position))}
        >
          {<MdGpsFixed size={20} />}
        </GeolocationButton>
      </MenuContainer>
      {Object.keys(data).length !== 0 ? (
        <>
          <WeatherIcon src={genegateWeatherIconSrc(Data.icon)} />
          <TemperatureContainer>
            <Temperature>{convertKtoC(Data.temperature)}</Temperature>

            <RiCelsiusFill
              size={60}
              style={{
                alignSelf: "center",
                marginTop: "30px",
                marginLeft: "10px",
              }}
              color={"#e7e7eb"}
            />
          </TemperatureContainer>
          <Weather>{Data.main}</Weather>
          <DateContainer>
            <DateText>Today</DateText>
            <DateText>{date(Data.date)}</DateText>
          </DateContainer>
          <CityContainer>
            <FaMapMarkerAlt color="#88869d" />
            <CityText>{Data.city}</CityText>
          </CityContainer>
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
    </Container>
  );
};
