import axios from "axios";
const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params }, thunkAPI) => {
    try {
      console.log({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().auth.userToken}`,
        },
      });
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().auth.userToken}`,
        },
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
export default axiosBaseQuery;
