import { memo } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingWrap>
      <ReactLoading type="spin" color="#A593E0" />
    </LoadingWrap>
  );
};

const LoadingWrap = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export default memo(Loading);
