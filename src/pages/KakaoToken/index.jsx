import { useEffect } from "react";
import { Navigate } from "react-router";
import {
  useKakaoCallbackDataSwr,
  useKakaoCallbackDataSwr2,
} from "../../hooks/useKakaoCallbackDataSwr";

const KakaoToken = () => {
  const currrentUrlQuery = window.location.search; // 현재 url query

  // const { data: userAccessData, mutate: userAccessMutate } =
  //   useKakaoCallbackDataSwr();
  const { data: userAccessData2, mutate: userAccessMutate2 } =
    useKakaoCallbackDataSwr2();

  // useEffect(() => {
  //   userAccessMutate(currrentUrlQuery);
  // }, [userAccessMutate, currrentUrlQuery]);

  useEffect(() => {
    userAccessMutate2(currrentUrlQuery);
  }, [userAccessMutate2, currrentUrlQuery]);

  // useEffect(() => {
  //   console.log({ UserAccessData });
  // }, [UserAccessData]);

  if (userAccessData2) {
    // return navigate("/join", { replace: false });
    return <Navigate to="/join" replace={false} />;
  }
  return <div>카카오토큰받자</div>;
};

//verify가 N이면 추가정보가 필요
//verify가 Y이면 추가정보있어서 home으로 가야함
export default KakaoToken;
