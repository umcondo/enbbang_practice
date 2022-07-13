import axios from "axios";

// 세션스토리지에 저장된 토큰으로 유저데이터를 받아오는 함수
const fetcherAccessToken = (url) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.accessToken}`,
      },
    })
    // 성공하면 데이터 실패하면 false를 저장한다.
    .then((response) => response.data)
    .catch((error) => false);

export default fetcherAccessToken;

// // refresh토큰 재발급
// axios
//   .get(
//     `http://172.30.1.41:7979/auth/token/reissuance/?refreshToken=${window.sessionStorage.refreshToken}`
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
