import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import useSWR from "swr";
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

  const { data: userAccessData } = useSWR("sessionStorage", getAccessData);

  if (userAccessData?.accessToken) {
    return <Navigate to="/main" replace={true} />;
  }
  // console.log(userAccessData);

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
