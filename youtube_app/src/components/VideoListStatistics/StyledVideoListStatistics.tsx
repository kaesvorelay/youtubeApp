import styled from "styled-components";

const StyledHeading = styled.h1`
  text-align: center;
  color: rgb(250, 237, 198);
  margin-top: 50px;
  font-size: 36px;
`;

const StyledChartWrap = styled.div`
  width: 100%;
  height: 100%;
`;
const StyledFigure = styled.figure`
  width: 40%;
  margin-right: 20px;
`;

const StyledContentWrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StyledColumn = styled.div`
  flex-direction: column;
  margin-top: 20px;
  padding: 0 20px;
`;

export {
  StyledHeading,
  StyledChartWrap,
  StyledFigure,
  StyledContentWrap,
  StyledColumn,
};
