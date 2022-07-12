import axios from "axios";

const fetcherAccessToken = (url) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.accessToken}`,
      },
    })
    .then((response) => response.data);

export default fetcherAccessToken;
