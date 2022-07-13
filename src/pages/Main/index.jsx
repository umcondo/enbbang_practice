import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router";
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
  flex-direction: column;
`;

const Main = () => {
  // 세션스토리지
  const { data: userAccessData, mutate: userAccessMutate } = useSWR(
    "sessionStorage",
    getAccessData
  );

  // 유저데이터
  const {
    data: userData,
    mutate: userMutate,
    error,
  } = useSWR("http://172.30.1.41:7979/user/profile/select", fetcherAccessToken);

  const [logout, setLogout] = useState(true);

  console.log(userAccessData, userData);

  // 로그아웃
  const Logout = () => {
    setLogout(false);
    axios
      .get("http://172.30.1.41:7979/user/logout", {
        headers: {
          Authorization: `Bearer ${userAccessData.accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        // setLogout(true);

        // 로그아웃 후 세션스토리지 비우고 swr데이터들을 초기화한다.
        window.sessionStorage.clear();
        userAccessMutate();
        userMutate();
      })
      .catch((error) => {
        console.log(error);
        userMutate();
        // // refresh토큰 재발급
        // axios
        //   .get(
        //     `http://172.30.1.41:7979/auth/token/reissuance/?refreshToken=${userAccessData.refreshToken}`
        //   )
        //   .then((response) => {
        //     console.log(response.data.accessToken);
        //     const accessToken = response.data.accessToken;
        //     if (accessToken) {
        //       window.sessionStorage.setItem("accessToken", accessToken);
        //     }
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
      });
  };

  // 회원탈퇴
  const withdrawal = () => {
    axios
      .delete("http://172.30.1.41:7979/user/withdrawal", {
        headers: {
          Authorization: `Bearer ${userAccessData.accessToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        // 탈퇴 후 세션스토리지 비우고 swr데이터들을 초기화한다.
        window.sessionStorage.clear();
        userAccessMutate();
        userMutate();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // swr로 데이터를 불러오는 중에는 로딩중 창을 띄운다.
  if (userAccessData === undefined || userData === undefined) {
    return <div>로딩중</div>;
  }

  // 유저데이터가 없으면 첫 페이지로 이동
  if (!userData) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <MainContainer>
      <ol>
        {Object.entries(userAccessData).map((elm, idx) => (
          <li key={idx}>
            {elm[0]}:{elm[1]}
          </li>
        ))}
      </ol>
      <ol>
        {Object.entries(userData.data).map((elm, idx) => {
          return (
            <li key={idx}>
              {elm[0]}:{elm[1]}
            </li>
          );
        })}
      </ol>
      메인페이지
      <button onClick={Logout}>로그아웃</button>
      {logout ? <div>로그인 중</div> : <div>로그인해라</div>}
      <button onClick={withdrawal}>회원탈퇴</button>
    </MainContainer>
  );
};

export default Main;
