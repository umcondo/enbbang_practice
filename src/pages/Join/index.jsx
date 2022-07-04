import styled from "styled-components";
import useInput from "./../../hooks/useInput";

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Join = () => {
  const [nickname, setNickname, onChangeNickname] = useInput("");

  const onSubmit = (e) => {
    e.preventDefault();
    setNickname("");
    alert("제출되었습니다");

    // post로 제출 access 토큰 필수
    // /user/profile/add, {name, nickname}
  };

  const doubleCheck = () => {
    // e.stopPropagation();
    alert("사용할 수 있는 별명입니다");
    // get방식 , API : /user/duplicate/nickname, query : nickname
  };

  return (
    <MainContainer>
      <h1>회원가입</h1>
      <form onSubmit={onSubmit}>
        <label for="nickname">사용할 닉네임 :&nbsp;</label>
        <input id="nickname" value={nickname} onChange={onChangeNickname} />
        &nbsp;
        <button type="submit">회원가입</button>
      </form>
      <button onClick={doubleCheck}>중복확인</button>
    </MainContainer>
  );
};

export default Join;
