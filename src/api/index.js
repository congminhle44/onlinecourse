/** @format */

import axios from 'axios';

export const api = axios.create({
  // baseURL: "https://onlinecourseapi.herokuapp.com",
  baseURL: 'http://localhost:5000',
});
