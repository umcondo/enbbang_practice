import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import useSWR from "swr";
import fetcherAccessToken from "../../utils/fetcherAccessToken";
import getAccessData from "../../utils/getAccessData";

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column;
  gap: 20px; */

  button {
    padding: 15px 30px;
    border: none;
    font-size: 20px;
    border-radius: 10px;
    background-color: #fee500;

    &:hover {
      cursor: pointer;
    }
  }
  img:hover {
    cursor: pointer;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
`;

// http://172.30.1.41:7979/api-docs/

const Login = () => {
  const KAKAO_AUTH_URL = "http://172.30.1.41:7979/auth/kakao";

  const { data: userData } = useSWR(
    "http://172.30.1.41:7979/user/profile/select",
    fetcherAccessToken
  );

  if (userData === undefined) {
    return <div>로딩중</div>;
  }

  /*
  verify === Y, 즉 추가 회원정보가 있으면 main으로
  verify === N, 가입은 되었지만 추가회원정보가 없으면 join으로
  가입이 안되어있다면 그냥 login페이지를 보여줌
  */

  if (window.sessionStorage.verify === "Y") {
    return <Navigate to="/main" replace={true} />;
  }
  if (window.sessionStorage.verify === "N") {
    return <Navigate to="/join" replace={true} />;
  }

  return (
    <MainContainer>
      <a href={KAKAO_AUTH_URL}>
        <button>카카오로그인</button>

        <img
          src={
            process.env.PUBLIC_URL +
            "assets/kakao_login/kakao_login_medium_narrow.png"
          }
          alt="kakaoLogin"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "assets/kakao_login/kakao_login_medium_wide.png"
          }
          alt="kakaoLogin"
        />

        <img
          src={
            process.env.PUBLIC_URL +
            "assets/kakao_login/kakao_login_large_narrow.png"
          }
          alt="kakaoLogin"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "assets/kakao_login/kakao_login_large_wide.png"
          }
          alt="kakaoLogin"
        />
      </a>
    </MainContainer>
  );
};

export default Login;
