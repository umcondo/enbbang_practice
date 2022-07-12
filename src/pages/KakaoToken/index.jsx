import { useEffect } from "react";
import { Navigate } from "react-router";
import {
  useKakaoCallbackDataSwr,
  useKakaoCallbackDataSwr2,
} from "../../hooks/useKakaoCallbackDataSwr";

const KakaoToken = () => {
  const currrentUrlQuery = window.location.search; // 현재 url query

  // SWR이용한 전역값 저장. 새로고침 시 사라져서 세션스토리지에 저장하는 식으로 변경
  // const { data: userAccessData2, mutate: userAccessMutate2 } =
  //   useKakaoCallbackDataSwr2();

  // useEffect(() => {
  //   userAccessMutate2(currrentUrlQuery);
  // }, [userAccessMutate2, currrentUrlQuery]);

  const params = new URLSearchParams(currrentUrlQuery); // URLSearchParams 객체
  const userAccessDataJson = params.get("user"); // user 인스턴스 - json type data
  const userAccessData = JSON.parse(userAccessDataJson); // user 객체

  // Access data
  const statusCode = userAccessData["statusCode"];
  const message = userAccessData["message"];
  const verify = userAccessData["verify"];
  const accessToken = userAccessData["accessToken"];
  const refreshToken = userAccessData["refreshToken"];

  // sessionStorage 저장
  window.sessionStorage.setItem("statusCode", statusCode);
  window.sessionStorage.setItem("message", message);
  window.sessionStorage.setItem("verify", verify);
  window.sessionStorage.setItem("accessToken", accessToken);
  window.sessionStorage.setItem("refreshToken", refreshToken);

  if (statusCode) {
    return <Navigate to="/join" replace={false} />;
  }
  return <div>카카오토큰받자</div>;
};

//verify가 N이면 추가정보가 필요
//verify가 Y이면 추가정보있어서 home으로 가야함
export default KakaoToken;
