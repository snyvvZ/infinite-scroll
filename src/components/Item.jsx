import { memo } from "react";
import styled from "styled-components";

const Item = ({ number }) => {
  return (
    <ItemWrap>
      <ItemWrapTop>{number}</ItemWrapTop>
      <ItemWrapBody>
        <ItemWrapBodyTitle />
        <ItemWrapBodyTitle />
        <ItemWrapBodyTitle />
        <ItemWrapBodyTitle />
        <ItemWrapBodyTitle />
        <ItemWrapBodyTitle />
        <ItemWrapBodyTitle />
      </ItemWrapBody>
    </ItemWrap>
  );
};

const ItemWrap = styled.div`
  width: 350px;
  height: 370px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 6px;
`;

const ItemWrapTop = styled.h1`
  display: flex;
  width: 350px;
  height: 170px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: #e2e5e7;
  color: #566270;
  font-size: 2.25rem;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const ItemWrapBody = styled.ul`
  height: 200px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 10px;
`;

const ItemWrapBodyTitle = styled.li`
  width: 300px;
  height: 36px;
  margin: 16px;
  border-radius: 4px;
  background-color: #e2e5e7;
`;

export default memo(Item);
