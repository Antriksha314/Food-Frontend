import axios from "axios";
export const BASE_URL = 'http://localhost:5000/api/';

export const Request = async (URL, { data, method, headers }) => {
  try {
    const { data: response } = await axios(URL, {
      data,
      method,
      headers,
    });
    return response;
  } catch (error) {
    return error?.response?.data;
  }
};
