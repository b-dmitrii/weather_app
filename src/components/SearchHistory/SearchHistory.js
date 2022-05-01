import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getPostionByCity } from "../../store/weatherSlice";

const SearchHistoryList = styled.ul`
  padding: 0;
  list-style: none;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

const SearchHistoryItem = styled.li`
  position: relative;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #e7e7eb;
  text-transform: lowercase;
  margin: 10px 0;
  padding: 23px 10px;

  &:first-letter {
    text-transform: uppercase;
  }

  &:hover {
    border: 1px solid #616475;
  }

  &:hover::before {
    position: absolute;
    content: ">";
    font-size: 20px;

    color: #616475;
    top: calc(50% - 10px);
    right: 10px;
  }
`;

export const SearchHistory = ({ setSearchClick }) => {
  const dispatch = useDispatch();
  const { searchHistory } = useSelector((state) => state.weather);
  const historySet = [...new Set(searchHistory)];

  const onShowWheather = (city) => {
    dispatch(getPostionByCity(city));
    setSearchClick(false);
  };

  return (
    <SearchHistoryList>
      {historySet.map((city) => (
        <SearchHistoryItem key={city} onClick={() => onShowWheather(city)}>
          {city}
        </SearchHistoryItem>
      ))}
    </SearchHistoryList>
  );
};
