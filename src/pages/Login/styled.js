import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 1px solid #000;
  padding: 10px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export { Container, Top, Body };