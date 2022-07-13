import axios from "axios";

const fetcherAccessToken = (url) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.accessToken}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => false);

export default fetcherAccessToken;
