import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router";
import styled from "styled-components";
import useInput from "./../../hooks/useInput";
import useSWR from "swr";
import getAccessData from "../../utils/getAccessData";
import fetcherAccessToken from "../../utils/fetcherAccessToken";

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

/*
  새로고침 시 마다 userAccessData 사라지니 아예 로컬,세션 스토리지에 저장?
  세션스토리지에서 유저 데이터 불러옴
  지속적으로 유저데이터를 받아와야하므로 swr를 이용
*/
const Join = () => {
  const { data: userAccessData } = useSWR("sessionStorage", getAccessData);

  const {
    data: userData,
    mutate: userMutate,
    error,
  } = useSWR("http://172.30.1.41:7979/user/profile/select", fetcherAccessToken);

  // 닉네임
  const [nickname, setNickname, onChangeNickname] = useInput("");
  // 닉네임 중복체크 메시지
  const [isNicknameDoubleCheck, setIsNicknameDoubleCheck] = useState("");
  // 회원가입 에러 메시지
  const [joinError, setJoinError] = useState("");

  // 회원가입
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      setJoinError("");
      axios
        .post(
          "http://172.30.1.41:7979/user/profile/add",
          {
            name: "empty", // name은 필요없지만 현재 API에서 필수값이라
            nickname,
          },
          {
            headers: {
              Authorization: `Bearer ${userAccessData.accessToken}`,
            },
          }
        )
        .then((response) => {
          // console.log(response);
          setJoinError(response.data.message);
          userMutate();
          alert("회원가입되었습니다");
        })
        .catch((error) => {
          // console.log(error);
          setJoinError(error.response?.data.message);
        });

      setNickname("");
    },
    [
      nickname,
      userAccessData?.accessToken,
      userMutate,
      setJoinError,
      setNickname,
    ]
  );

  // 중복체크
  const doubleCheck = useCallback(() => {
    // get방식 , API : /user/duplicate/nickname, query : nickname
    // setIsNicknameDoubleCheck("");
    axios
      .get("http://172.30.1.41:7979/user/duplicate/nickname", {
        params: { nickname: nickname },
      })
      .then((response) => {
        console.log(response);
        response.data.duplicate === "true"
          ? setIsNicknameDoubleCheck("중복입니다")
          : setIsNicknameDoubleCheck("사용가능한 닉네임입니다");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [nickname]);

  if (userAccessData === undefined || userData === undefined) {
    return <div>로딩중</div>;
  }

  // 토큰은 있지만 유저 아이디가 없어서 http 통신은 200으로 성공했지만 내부 statuscode는 400이다.
  if (!(userData.statusCode === 400)) {
    return <Navigate to="/main" replace={true} />;
  }

  if (window.sessionStorage.verify === "Y") {
    return <Navigate to="/main" replace={true} />;
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
      {/* <ol>
        {Object.entries(userData.data).map((elm, idx) => {
          return (
            <li key={idx}>
              {elm[0]}:{elm[1]}
            </li>
          );
        })}
      </ol> */}
      <h1>회원가입</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="nickname">사용할 닉네임 :&nbsp;</label>
        <input id="nickname" value={nickname} onChange={onChangeNickname} />
        {!nickname && <div>닉네임을 입력해주세요</div>}
        &nbsp;
        <button type="submit">회원가입</button>
        {joinError && <div>{joinError}</div>}
      </form>
      <button onClick={doubleCheck}>중복확인</button>
      {isNicknameDoubleCheck}
    </MainContainer>
  );
};

export default Join;
