import axios from "axios";

export const adminLogin = async (payload) => {
  try {
    console.log(payload)
    const {data} = await axios.post("https://tpbe.antino.ca/api/admin/login", payload);
    const {result} = data;
    const {access_token, refresh_token} = result;
    console.log(access_token)
    console.log(refresh_token)
    localStorage.setItem("access token",access_token);
    localStorage.setItem("refresh_token token",refresh_token);
  } catch (error) {
    console.log(error);
  }
};
