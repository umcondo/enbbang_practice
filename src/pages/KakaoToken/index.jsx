import { useEffect } from "react";
import { Navigate } from "react-router";

// 유저인증정보(토큰, 추가정보유무)를 쿼리로 받아온다.

const KakaoToken = () => {
  const currrentUrlQuery = window.location.search; // 현재 url query

  // SWR이용한 전역값 저장. 새로고침 시 사라져서 세션스토리지에 저장하는 식으로 변경

  const params = new URLSearchParams(currrentUrlQuery); // URLSearchParams 객체
  const userAccessDataJson = params.get("user"); // user 인스턴스 - json type data
  const userAccessData = JSON.parse(userAccessDataJson); // user 객체

  // Access data - statusCode, message는 저장할 필요없지 않나?
  // const statusCode = userAccessData["statusCode"];
  // const message = userAccessData["message"];

  // 회원 추가정보가 있는 상태인지 Y,N으로 설명
  const verify = userAccessData["verify"];

  const accessToken = userAccessData["accessToken"];
  const refreshToken = userAccessData["refreshToken"];

  // sessionStorage 저장
  window.sessionStorage.setItem("verify", verify);
  window.sessionStorage.setItem("accessToken", accessToken);
  window.sessionStorage.setItem("refreshToken", refreshToken);

  if (verify === "Y") {
    return <Navigate to="/main" replace={true} />;
  }
  if (verify === "N") {
    return <Navigate to="/join" replace={true} />;
  }
};

export default KakaoToken;
