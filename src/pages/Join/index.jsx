import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router";
import styled from "styled-components";
import {
  useKakaoCallbackDataSwr,
  useKakaoCallbackDataSwr2,
} from "../../hooks/useKakaoCallbackDataSwr";
import useInput from "./../../hooks/useInput";
import useSWR from "swr";
import useFetcher from "../../utils/useFetcher";

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Join = () => {
  // 새로고침 시 마다 userAccessData 사라지니 아예 로컬,세션 스토리지에 저장?
  const { data: userAccessData } = useKakaoCallbackDataSwr2();
  const { data: useData } = useSWR(
    "http://172.30.1.41:7979/user/profile/select",
    useFetcher
  );

  console.log(useData);
  const [nickname, setNickname, onChangeNickname] = useInput("");
  const [isNickname, setIsNickname] = useInput(false);
  const onSubmit = (e) => {
    e.preventDefault();

    // post로 제출 access 토큰 필수
    // /user/profile/add, {name, nickname}
    axios
      .post(
        "http://172.30.1.41:7979/user/profile/add",
        {
          name: "empty",
          nickname,
        },
        {
          headers: {
            Authorization: `Bearer ${userAccessData.accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert("회원가입되었습니다");
        return <Navigate to="/main" replace={false} />;
      })
      .catch((error) => {
        console.log(error);
      });

    setNickname("");
  };

  useEffect(() => {
    console.log(userAccessData);
  }, [userAccessData]);

  const doubleCheck = () => {
    // e.stopPropagation();

    // get방식 , API : /user/duplicate/nickname, query : nickname
    setIsNickname(false);
    axios
      .get("http://172.30.1.41:7979/user/duplicate/nickname", {
        params: { nickname: nickname },
      })
      .then((response) => {
        console.log(response);
        setIsNickname(true);
        response.data.duplicate = "false"
          ? alert("사용할 수 없는 별명입니다")
          : alert("사용할 수 있는 별명입니다");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <MainContainer>
      <ol>
        {Object?.entries(userAccessData).map((elm, idx) => (
          <li key={idx}>
            {elm[0]}:{elm[1]}
          </li>
        ))}
      </ol>
      <h1>회원가입</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="nickname">사용할 닉네임 :&nbsp;</label>
        <input id="nickname" value={nickname} onChange={onChangeNickname} />
        &nbsp;
        <button type="submit">회원가입</button>
      </form>
      <button onClick={doubleCheck}>중복확인</button>
      {isNickname ? <div>중복입니다!</div> : <div>중복이 아닙니다</div>}
    </MainContainer>
  );
};

export default Join;
