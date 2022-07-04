import { useNavigate } from "react-router";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainTextBackground = styled.div`
  background: url(${process.env.PUBLIC_URL + "assets/home.jpg"});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 70px;
  }

  p {
    font-size: 25px;
  }
  p:nth-child(1) {
    margin-bottom: 50px;
  }
  h1 {
    margin-bottom: 50px;
    font-size: 70px;
    text-align: center;
  }

  &:hover {
    cursor: pointer;
  }
`;
const Home = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <MainContainer>
      <MainTextBackground onClick={goToLogin}>
        <div>
          <p>저랑 같이 사실래요?</p>
          <h1>
            이웃의
            <br /> 마켓
          </h1>
          <p>이웃과 공동구매</p>
        </div>
      </MainTextBackground>
    </MainContainer>
  );
};

export default Home;
