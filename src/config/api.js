import axios from 'axios';

// Create base URL API
export const API = axios.create({
  baseURL: 'https://api.kontenbase.com/query/api/v1/2f47a625-a92a-46b1-8f6d-c26fc101efeb',
});