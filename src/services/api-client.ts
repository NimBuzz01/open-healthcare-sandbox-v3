import axios from "axios";

export const apiClient = (url: string) => {
  return axios.create({
    baseURL: url,
  });
};

interface Params {
  [key: string]: string;
}

export const setParamsToUrl = (url: string, params: Params): string => {
  let updatedUrl = url;
  Object.keys(params).forEach((key) => {
    const paramKey = `{${key}}`;
    updatedUrl = updatedUrl.replace(paramKey, params[key]);
  });
  return updatedUrl;
}
