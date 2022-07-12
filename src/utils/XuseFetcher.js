import axios from "axios";
import useSWR from "swr";
import getAccessData from "./getAccessData";

const useFetcher = (url) => {
  const { data: userAccessData } = useSWR("sessionStorage", getAccessData);
  return axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${userAccessData.accessToken}`,
      },
    })
    .then((response) => response.data);
};

export default useFetcher;
