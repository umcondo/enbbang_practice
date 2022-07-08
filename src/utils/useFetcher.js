import axios from "axios";
import { useKakaoCallbackDataSwr2 } from "../hooks/useKakaoCallbackDataSwr";

const useFetcher = (url) => {
  const { data: userAccessData } = useKakaoCallbackDataSwr2();
  axios.get(url, {
    headers: {
      Authorization: `Bearer ${userAccessData.accessToken}`,
    },
  });
};

export default useFetcher;
