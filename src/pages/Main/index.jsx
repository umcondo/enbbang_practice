import styled from "styled-components";

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Main = () => {
  return (
    <MainContainer>
      메인페이지
      <button>로그아웃</button>
    </MainContainer>
  );
};

export default Main;
