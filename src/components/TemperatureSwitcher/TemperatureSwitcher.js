import styled from "styled-components";

import { RiCelsiusFill } from "react-icons/ri";
import { RiFahrenheitFill } from "react-icons/ri";
import { useState } from "react";

const SwitcherList = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    justify-content: end;
  }
`;

const SwitcherItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.tempActive ? "#E7E7EB" : "#585676")};
  color: ${(props) => (props.tempActive ? "#110E3C" : "#E7E7EB")};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:first-child {
    margin-right: 12px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const TemperatureSwitcher = () => {
  const [tempCActive, setTempCActive] = useState(true);
  const [tempFActive, setTempFActive] = useState(false);

  const temperatureSwitchHundler = (value) => {
    if (value === "c") {
      setTempCActive(true);
      setTempFActive(false);
    }
    if (value === "f") {
      setTempCActive(false);
      setTempFActive(true);
    }
  };

  return (
    <SwitcherList>
      <SwitcherItem
        onClick={() => temperatureSwitchHundler("c")}
        tempActive={tempCActive}
      >
        <RiCelsiusFill />
      </SwitcherItem>
      <SwitcherItem
        onClick={() => temperatureSwitchHundler("f")}
        tempActive={tempFActive}
      >
        <RiFahrenheitFill />
      </SwitcherItem>
    </SwitcherList>
  );
};
