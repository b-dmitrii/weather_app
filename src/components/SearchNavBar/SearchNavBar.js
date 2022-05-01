import styled from "styled-components";

import { IoMdClose } from "react-icons/io";
import { useState } from "react";

import { SearchHistory } from "../SearchHistory/SearchHistory";
import { useDispatch } from "react-redux";
import { getPostionByCity, setSearchHistory } from "../../store/weatherSlice";

const Container = styled.div`
  padding: 60px 13px;
  background-color: #1e213a;
  display: flex;
  flex-direction: column;
  height: 80vh;
  @media (min-width: 1280px) {
    position: relative;
    padding: 82px 46px;
    height: 100vh;
  }
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchInputContainer = styled.div`
  position: relative;
  width: 65%;
`;

const SearchInput = styled.input`
  padding: 13px 0 14px 49px;
  width: 100%;
  background-color: inherit;
  border: 1px solid #e7e7eb;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #e7e7eb;
`;

const CloseButton = styled.button`
  position: absolute;
  border: none;
  top: 20px;
  right: 40px;
  background-color: inherit;
  cursor: pointer;
`;

const SearchButton = styled.button`
  padding: 14px 14px 15px 19px;
  background-color: #3c47e9;
  color: #e7e7eb;
  font-size: 16px;
  line-height: 19px;
  border-radius: 0;
  border: none;
  text-transform: none;
  &:hover {
    box-shadow: 0 2px 20px #3c47e9;
  }

  &:disabled {
    background-color: #1b2170;
  }
`;

export const SearchNavBar = ({ setSearchClick }) => {
  const [location, setLocation] = useState("");

  const dispatch = useDispatch();

  const searchLocationHundler = (value) => {
    setLocation(value);
  };

  const submitHundler = (e) => {
    e.preventDefault();
    dispatch(setSearchHistory(location));
    dispatch(getPostionByCity(location));
    setSearchClick(false);
  };

  return (
    <Container>
      <CloseButton onClick={() => setSearchClick(false)}>
        <IoMdClose color="#E7E7EB" size={20} />
      </CloseButton>
      <SearchForm>
        <SearchInputContainer>
          <SearchInput
            type="text"
            value={location}
            placeholder="search location"
            onChange={(e) => searchLocationHundler(e.target.value)}
          />
        </SearchInputContainer>

        <SearchButton disabled={!location} onClick={(e) => submitHundler(e)}>
          Search
        </SearchButton>
      </SearchForm>
      <SearchHistory setSearchClick={setSearchClick} />
    </Container>
  );
};
