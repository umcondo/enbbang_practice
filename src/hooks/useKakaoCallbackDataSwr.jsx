import useSWRImmutable from "swr/immutable";
import useSWR from "swr";

// 데이터를 한번 불러오고 자동갱신 안되도록 한다.
export const useKakaoCallbackDataSwr = () => {
  let value = "";
  //   const { data, mutate } = useSWRImmutable("CallbackData", () => {
  const { data, mutate } = useSWR("CallbackData", () => {
    // url에서 값 받아옴
    return value;
  });

  return {
    data,
    mutate: (urlQuery) => {
      const currrentUrlQuery = urlQuery; // 현재 url query
      const params = new URLSearchParams(currrentUrlQuery); // URLSearchParams 객체
      const userAccessDataJson = params.get("user"); // user 인스턴스 - json type data
      const userAccessData = JSON.parse(userAccessDataJson); // user 객체

      // Access data
      const statusCode = userAccessData["statusCode"];
      const message = userAccessData["message"];
      const verify = userAccessData["verify"];
      const accessToken = userAccessData["accessToken"];
      const refreshToken = userAccessData["refreshToken"];

      value = { statusCode, message, verify, accessToken, refreshToken };
      return mutate();
    },
  };
};
let url = "";
export const useKakaoCallbackDataSwr2 = () => {
  const { data, mutate } = useSWR("CallbackData", () => {
    return getAccessData(url);
  });

  return {
    data,
    mutate: (query) => {
      url = query;
      return mutate();
    },
  };
};

const getAccessData = (url) => {
  if (url) {
    const currrentUrlQuery = url; // 현재 url query
    const params = new URLSearchParams(currrentUrlQuery); // URLSearchParams 객체
    const userAccessDataJson = params.get("user"); // user 인스턴스 - json type data
    const userAccessData = JSON.parse(userAccessDataJson); // user 객체

    // Access data
    const statusCode = userAccessData["statusCode"];
    const message = userAccessData["message"];
    const verify = userAccessData["verify"];
    const accessToken = userAccessData["accessToken"];
    const refreshToken = userAccessData["refreshToken"];

    return { statusCode, message, verify, accessToken, refreshToken };
  }
  return {};
};
