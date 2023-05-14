import axios from "axios";

const apiClinet = (url: string) => {
  return axios.create({
    baseURL: url,
  });
};

export default apiClinet;
