// Use Postman, or JavaScript to get your API key
// In Workflow we will learn how to secure this information

//Remember to not commit if you hard code the API Key
// const localStorageKey = JSON.parse(localStorage.getItem("API KEY"));

export const API_KEY = "dd830bfd-028c-4f1a-b35e-c7a9612ed673";

export const API_BASE = "https://v2.api.noroff.dev";

export const API_AUTH = `${API_BASE}/auth`;

export const API_AUTH_LOGIN = `${API_AUTH}/login`;

export const API_AUTH_REGISTER = `${API_AUTH}/register`;

export const API_AUTH_KEY = `${API_AUTH}/create-api-key`;

export const API_SOCIAL = `${API_BASE}/social`;

export const API_SOCIAL_POSTS = `${API_SOCIAL}/posts`;

export const API_SOCIAL_PROFILES = `${API_SOCIAL}/profiles`;
