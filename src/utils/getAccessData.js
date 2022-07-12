const getAccessData = () => {
  const statusCode = window.sessionStorage.getItem("statusCode");
  const message = window.sessionStorage.getItem("message");
  const verify = window.sessionStorage.getItem("verify");
  const accessToken = window.sessionStorage.getItem("accessToken");
  const refreshToken = window.sessionStorage.getItem("refreshToken");

  return { statusCode, message, verify, accessToken, refreshToken };
};

export default getAccessData;
