import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:5000/api/';
const responseBody = (response: AxiosResponse) => response.data;
axios.interceptors.response.use(
   (response) => {
      return response;
   },
   (error: AxiosError) => {
      const { data, status } = error.response as AxiosResponse;
      switch (status) {
         case 400:
            toast.error(data.title);
            break;
         case 401:
            toast.error(data.title);
            break;
         case 500:
            toast.error(data.title);
            break;
         default:
            toast.error(data.title);
            break;
      }
      return Promise.reject(error.response);
   }
);

const requests = {
   get: (url: string) => axios.get(url).then(responseBody),
   post: (url: string, body: object) =>
      axios.post(url, body).then(responseBody),
   put: (url: string, body: object) => axios.put(url, body).then(responseBody),
   delete: (url: string) => axios.delete(url).then(responseBody),
};

const Catalog = {
   list: () => requests.get('products'),
   details: (id: number) => requests.get(`products/${id}`),
};

const TestErrors = {
   get400Error: () =>
      requests.get('buggy/bad-request').catch((err) => console.log(err)),
   get401Error: () =>
      requests.get('buggy/unauthorized').catch((err) => console.log(err)),
   get404Error: () =>
      requests.get('buggy/not-found').catch((err) => console.log(err)),
   get500Error: () =>
      requests.get('buggy/server-error').catch((err) => console.log(err)),
   getValidationError: () =>
      requests.get('buggy/validation-error').catch((err) => console.log(err)),
};

export const agent = {
   Catalog,
   TestErrors,
};