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
  const { data: userAccessData, mutate: userAccessMutate } = useSWR(
    "sessionStorage",
    getAccessData
  );

  const {
    data: userData,
    mutate,
    error,
  } = useSWR("http://172.30.1.41:7979/user/profile/select", fetcherAccessToken);

  const [logout, setLogout] = useState(true);
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
        userAccessMutate(false, false);
        window.sessionStorage.clear();
      })
      .catch((error) => {
        console.log(error);
        // refresh토큰 재발급
        axios
          .get(
            `http://172.30.1.41:7979/auth/token/reissuance/?refreshToken=${userAccessData.refreshToken}`
          )
          .then((response) => {
            console.log(response.data.accessToken);
            const accessToken = response.data.accessToken;
            if (accessToken) {
              window.sessionStorage.setItem("accessToken", accessToken);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };

  if (!userAccessData) {
    return <Navigate to="/" replace={true} />;
  }
  // if (!userData) {
  //   return <Navigate to="/" replace={true} />;
  // }

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
    </MainContainer>
  );
};

export default Main;
