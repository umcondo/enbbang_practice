import axios from "axios";
import useSWR from "swr";
import getAccessData from "../utils/getAccessData";

const useSWRUserData = () => {
  // 비동기적 처리 필요 userAccessData를 받아온 후 서버에 userData를 요청해야함
  const { data: userAccessData } = useSWR("sessionStorage", getAccessData);

  const fetcher = (url) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${userAccessData.accessToken}`,
        },
      })
      .then((response) => response.data);

  const { data, mutate, error } = useSWR(
    "http://172.30.1.41:7979/user/profile/select",
    fetcher
  );

  return { data, mutate, error };
};

export default useSWRUserData;
