import axios from 'axios';

export default async function AxiosRequest(request) {
  axios.defaults.baseURL = "https://picsum.photos/v2";
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  try {
    return await axios(request);
  } catch (error) {
    return { ...error.response, message: error.message };
  }
}
